// =====================================
// VELOURA - CHECKOUT.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("CHECKOUT.JS LOADED");


    // =====================================
    // ELEMENTS
    // =====================================

    const checkoutItems =
        document.getElementById(
            "checkout-items"
        );

    const subtotalElement =
        document.getElementById(
            "checkout-subtotal"
        );

    const deliveryElement =
        document.getElementById(
            "checkout-delivery"
        );

    const totalElement =
        document.getElementById(
            "checkout-total"
        );

    const checkoutForm =
        document.getElementById(
            "checkout-form"
        );

    const checkoutFormWrap =
        document.getElementById(
            "checkout-form-wrap"
        );

    const orderConfirmation =
        document.getElementById(
            "order-confirmation"
        );

    const confirmedOrderId =
        document.getElementById(
            "confirmed-order-id"
        );


    // =====================================
    // GET CART
    // =====================================

    const cart = getCart();


    console.log(
        "Cart on checkout:",
        cart
    );


    // =====================================
    // EMPTY CART
    // =====================================

    if (!cart || cart.length === 0) {

        if (checkoutItems) {

            checkoutItems.innerHTML = `
                <div class="empty-cart">

                    <h3>Your Cart is Empty</h3>

                    <p>
                        Please add some products before checkout.
                    </p>

                    <a
                        href="makeup.html"
                        class="button primary-button"
                    >
                        Continue Shopping
                    </a>

                </div>
            `;

        }


        if (subtotalElement) {

            subtotalElement.textContent =
                formatPKR(0);

        }


        if (deliveryElement) {

            deliveryElement.textContent =
                formatPKR(0);

        }


        if (totalElement) {

            totalElement.textContent =
                formatPKR(0);

        }


        return;
    }


    // =====================================
    // SUBTOTAL
    // =====================================

    let subtotal = 0;

    const orderProducts = [];


    if (checkoutItems) {

        checkoutItems.innerHTML =
            cart.map(item => {

                const product =
                    veloraProducts.find(
                        product =>
                            Number(product.id) ===
                            Number(item.productId)
                    );


                if (!product) {

                    console.warn(
                        "Product not found:",
                        item.productId
                    );

                    return "";

                }


                const itemTotal =
                    Number(product.price) *
                    Number(item.quantity);


                subtotal += itemTotal;


                orderProducts.push({

                    productId:
                        product.id,

                    name:
                        product.name,

                    price:
                        product.price,

                    quantity:
                        item.quantity

                });


                return `
                    <div class="checkout-item">

                        <div class="checkout-item-info">

                            <strong>
                                ${product.name}
                            </strong>

                            <span>
                                Qty: ${item.quantity}
                            </span>

                        </div>

                        <span class="checkout-item-price">
                            ${formatPKR(itemTotal)}
                        </span>

                    </div>
                `;

            }).join("");

    }


    // =====================================
    // DELIVERY
    // =====================================

    let delivery = 200;


    // =====================================
    // UPDATE SUMMARY
    // =====================================

    function updateCheckoutSummary() {

        const deliveryMethod =
            document.querySelector(
                'input[name="delivery"]:checked'
            );


        if (
            deliveryMethod &&
            deliveryMethod.value === "express"
        ) {

            delivery = 500;

        } else {

            delivery = 200;

        }


        const total =
            subtotal + delivery;


        if (subtotalElement) {

            subtotalElement.textContent =
                formatPKR(subtotal);

        }


        if (deliveryElement) {

            deliveryElement.textContent =
                formatPKR(delivery);

        }


        if (totalElement) {

            totalElement.textContent =
                formatPKR(total);

        }

    }


    updateCheckoutSummary();


    // =====================================
    // DELIVERY CHANGE
    // =====================================

    const deliveryInputs =
        document.querySelectorAll(
            'input[name="delivery"]'
        );


    deliveryInputs.forEach(input => {

        input.addEventListener(
            "change",
            updateCheckoutSummary
        );

    });


    // =====================================
    // PLACE ORDER
    // =====================================

    if (checkoutForm) {

        checkoutForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                console.log(
                    "PLACE ORDER CLICKED"
                );


                // =====================================
                // GET INPUTS
                // =====================================

                const inputs =
                    checkoutForm.querySelectorAll(
                        "input"
                    );


                const name =
                    inputs[0]?.value.trim() || "";

                const email =
                    inputs[1]?.value.trim() || "";

                const phone =
                    inputs[2]?.value.trim() || "";


                const house =
                    inputs[3]?.value.trim() || "";

                const area =
                    inputs[4]?.value.trim() || "";

                const city =
                    inputs[5]?.value.trim() || "";

                const province =
                    inputs[6]?.value.trim() || "";

                const postalCode =
                    inputs[7]?.value.trim() || "";


                // =====================================
                // VALIDATION
                // =====================================

                if (
                    !name ||
                    !email ||
                    !phone ||
                    !house ||
                    !area ||
                    !city ||
                    !province ||
                    !postalCode
                ) {

                    console.warn(
                        "Please fill in all required fields."
                    );

                    return;
                }


                // =====================================
                // PAYMENT
                // =====================================

                const paymentInput =
                    document.querySelector(
                        'input[name="payment"]:checked'
                    );


                const paymentMethod =
                    paymentInput
                        ? paymentInput.value
                        : "cod";


                // =====================================
                // DELIVERY
                // =====================================

                const deliveryInput =
                    document.querySelector(
                        'input[name="delivery"]:checked'
                    );


                const deliveryMethod =
                    deliveryInput
                        ? deliveryInput.value
                        : "standard";


                // =====================================
                // TOTAL
                // =====================================

                const total =
                    subtotal + delivery;


                // =====================================
                // ORDER ID
                // =====================================

                const orderId =
                    "VEL-" +
                    Date.now()
                        .toString()
                        .slice(-6);


                // =====================================
                // ADDRESS
                // =====================================

                const fullAddress =
                    `${house}, ${area}, ${city}, ${province}`;


                // =====================================
                // ORDER DATA
                // =====================================

                const orderData = {

                    orderId: orderId,

                    customer: {

                        name: name,

                        email: email,

                        phone: phone

                    },

                    address: {

                        street: fullAddress,

                        city: city,

                        postalCode: postalCode

                    },

                    products: orderProducts,

                    subtotal: subtotal,

                    delivery: delivery,

                    total: total,

                    deliveryMethod:
                        deliveryMethod,

                    paymentMethod:
                        paymentMethod,

                    status: "Pending"

                };


                console.log(
                    "ORDER DATA:",
                    orderData
                );


                // =====================================
                // SEND TO BACKEND
                // =====================================

                try {

                    const response =
                        await fetch(
                            "https://veloura-backend-tau.vercel.app/api/orders",
                            {
                                method: "POST",

                                headers: {

                                    "Content-Type":
                                        "application/json"

                                },

                                body:
                                    JSON.stringify(
                                        orderData
                                    )

                            }
                        );


                    const data =
                        await response.json();


                    console.log(
                        "Backend response:",
                        data
                    );


                    // =====================================
                    // ERROR
                    // =====================================

                    if (!response.ok) {

                        throw new Error(
                            data.message ||
                            "Unable to place order."
                        );

                    }


                    // =====================================
                    // SUCCESS
                    // =====================================

                    console.log(
                        "Order saved in MongoDB:",
                        data
                    );


                    if (checkoutFormWrap) {

                        checkoutFormWrap.style.display =
                            "none";

                    }


                    if (orderConfirmation) {

                        orderConfirmation.style.display =
                            "block";

                    }


                    if (confirmedOrderId) {

                        confirmedOrderId.textContent =
                            orderId;

                    }


                    // =====================================
                    // CLEAR CART
                    // =====================================

                    if (
                        typeof clearCart ===
                        "function"
                    ) {

                        clearCart();

                    }


                    // =====================================
                    // CART COUNT
                    // =====================================

                    const cartCount =
                        document.querySelector(
                            ".cart-count"
                        );


                    if (cartCount) {

                        cartCount.textContent =
                            "0";

                    }


                    console.log(
                        "ORDER PLACED SUCCESSFULLY:",
                        orderId
                    );

                }

                catch (error) {

                    console.error(
                        "ORDER ERROR:",
                        error
                    );

                }

            }
        );

    }

});