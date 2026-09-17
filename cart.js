// =====================================
// VELOURA - CART.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("CART.JS LOADED");

    const cartItemsContainer =
        document.getElementById("cart-items");

    const subtotalElement =
        document.getElementById("summary-subtotal");

    const discountElement =
        document.getElementById("summary-discount");

    const deliveryElement =
        document.getElementById("summary-delivery");

    const totalElement =
        document.getElementById("summary-total");

    const cartCountElement =
        document.querySelector(".cart-count");


    // =====================================
    // CART RENDER
    // =====================================

    function renderCart() {

        const cart = getCart();

        if (cart.length === 0) {

            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <h2>Your Cart is Empty</h2>

                    <p>
                        Add some beautiful products
                        to your cart.
                    </p>

                    <a
                        href="makeup.html"
                        class="button primary-button"
                    >
                        Continue Shopping
                    </a>
                </div>
            `;

            updateSummary();

            return;
        }


        cartItemsContainer.innerHTML = cart.map(item => {

            const product =
                veloraProducts.find(
                    product =>
                        product.id === item.productId
                );


            if (!product) {
                return "";
            }


            const itemTotal =
                product.price * item.quantity;


            return `
                <div class="cart-item">

                    <div class="cart-item-image">
                        <img
                            src="${product.img}"
                            alt="${product.name}"
                            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop';"
                        >
                    </div>


                    <div class="cart-item-info">

                        <p class="product-brand">
                            ${product.brand}
                        </p>

                        <h3>
                            ${product.name}
                        </h3>

                        <p class="cart-item-price">
                            ${formatPKR(product.price)}
                        </p>

                    </div>


                    <div class="cart-item-quantity">

                        <button
                            class="quantity-minus"
                            data-id="${product.id}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            class="quantity-plus"
                            data-id="${product.id}"
                        >
                            +
                        </button>

                    </div>


                    <div class="cart-item-total">
                        ${formatPKR(itemTotal)}
                    </div>


                    <button
                        class="remove-cart-item"
                        data-id="${product.id}"
                    >
                        Remove
                    </button>

                </div>
            `;

        }).join("");


        setupCartButtons();

        updateSummary();

    }


    // =====================================
    // QUANTITY + / -
    // =====================================

    function setupCartButtons() {


        // PLUS
        document
            .querySelectorAll(".quantity-plus")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const productId =
                        Number(button.dataset.id);

                    const cart = getCart();

                    const item = cart.find(
                        item =>
                            item.productId === productId
                    );

                    if (item) {

                        updateCartQuantity(
                            productId,
                            item.quantity + 1
                        );

                        renderCart();

                    }

                });

            });


        // MINUS
        document
            .querySelectorAll(".quantity-minus")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const productId =
                        Number(button.dataset.id);

                    const cart = getCart();

                    const item = cart.find(
                        item =>
                            item.productId === productId
                    );

                    if (item) {

                        updateCartQuantity(
                            productId,
                            item.quantity - 1
                        );

                        renderCart();

                    }

                });

            });


        // REMOVE
        document
            .querySelectorAll(".remove-cart-item")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const productId =
                        Number(button.dataset.id);

                    removeFromCart(productId);

                    renderCart();

                });

            });

    }


    // =====================================
    // ORDER SUMMARY
    // =====================================

    function updateSummary() {

        const cart = getCart();

        let subtotal = 0;


        cart.forEach(item => {

            const product =
                veloraProducts.find(
                    product =>
                        product.id === item.productId
                );


            if (product) {

                subtotal +=
                    product.price * item.quantity;

            }

        });


        // Delivery
        const delivery =
            subtotal > 0 ? 200 : 0;


        // Discount
        const discount = 0;


        // Final total
        const total =
            subtotal - discount + delivery;


        if (subtotalElement) {

            subtotalElement.textContent =
                formatPKR(subtotal);

        }


        if (discountElement) {

            discountElement.textContent =
                formatPKR(discount);

        }


        if (deliveryElement) {

            deliveryElement.textContent =
                formatPKR(delivery);

        }


        if (totalElement) {

            totalElement.textContent =
                formatPKR(total);

        }


        // Navbar cart count
        if (cartCountElement) {

            cartCountElement.textContent =
                getCartCount();

        }

    }


    // =====================================
    // INITIAL LOAD
    // =====================================

    renderCart();

});