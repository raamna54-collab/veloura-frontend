// =====================================
// VELOURA - WISHLIST.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("WISHLIST.JS LOADED");


    const wishlistGrid =
        document.getElementById("wishlist-items");

    const wishlistCount =
        document.getElementById("wishlist-count");


    // Agar wishlist page nahi hai
    if (!wishlistGrid) {
        return;
    }


    // =====================================
    // RENDER WISHLIST
    // =====================================

    function renderWishlist() {

        const wishlist =
            getWishlist();


        // Wishlist empty
        if (wishlist.length === 0) {

            wishlistGrid.innerHTML = `
                <div class="empty-wishlist">

                    <h2>Your Wishlist is Empty</h2>

                    <p>
                        Save your favourite beauty products
                        here for later.
                    </p>

                    <a
                        href="makeup.html"
                        class="button primary-button"
                    >
                        Continue Shopping
                    </a>

                </div>
            `;

            updateWishlistCount();

            return;
        }


        // Wishlist products
        const products =
            wishlist
                .map(productId =>
                    veloraProducts.find(
                        product =>
                            product.id === productId
                    )
                )
                .filter(product => product);


        wishlistGrid.innerHTML =
            products.map(product =>
                createWishlistCard(product)
            ).join("");


        setupWishlistButtons();

        updateWishlistCount();

    }


    // =====================================
    // PRODUCT CARD
    // =====================================

    function createWishlistCard(product) {

        const discount =
            product.oldPrice
                ? Math.round(
                    100 -
                    (product.price / product.oldPrice) * 100
                )
                : null;


        return `
            <article class="product-card">

                <a
                    href="product-details.html?id=${product.id}"
                    class="product-image-link"
                >

                    <div class="product-image-wrap">

                        ${
                            product.badge
                                ? `
                                    <span class="product-badge">
                                        ${product.badge}
                                    </span>
                                  `
                                : ""
                        }

                        <img
                            src="${product.img}"
                            alt="${product.name}"
                            class="product-image"
                            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop';"
                        >

                    </div>

                </a>


                <div class="product-info">

                    <p class="product-brand">
                        ${product.brand}
                    </p>


                    <h3 class="product-name">

                        <a
                            href="product-details.html?id=${product.id}"
                        >
                            ${product.name}
                        </a>

                    </h3>


                    <div class="product-rating">

                        <span>★</span>

                        <span>
                            ${product.rating}
                        </span>

                    </div>


                    <div class="product-price">

                        <span class="current-price">
                            ${formatPKR(product.price)}
                        </span>

                        ${
                            product.oldPrice
                                ? `
                                    <span class="old-price">
                                        ${formatPKR(product.oldPrice)}
                                    </span>

                                    <span class="discount">
                                        ${discount}% OFF
                                    </span>
                                  `
                                : ""
                        }

                    </div>


                    <div class="wishlist-card-actions">

                        <button
                            class="add-wishlist-cart"
                            data-id="${product.id}"
                        >
                            Add to Cart
                        </button>


                        <button
                            class="remove-wishlist"
                            data-id="${product.id}"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            </article>
        `;
    }


    // =====================================
    // BUTTONS
    // =====================================

    function setupWishlistButtons() {


        // ADD TO CART
        document
            .querySelectorAll(".add-wishlist-cart")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const productId =
                        Number(button.dataset.id);


                    addToCart(
                        productId,
                        1
                    );


                    button.textContent =
                        "Added to Cart";


                    setTimeout(() => {

                        button.textContent =
                            "Add to Cart";

                    }, 1500);

                });

            });


        // REMOVE FROM WISHLIST
        document
            .querySelectorAll(".remove-wishlist")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const productId =
                        Number(button.dataset.id);


                    removeFromWishlist(
                        productId
                    );


                    renderWishlist();

                });

            });

    }


    // =====================================
    // WISHLIST COUNT
    // =====================================

    function updateWishlistCount() {

        const count =
            getWishlistCount();


        if (wishlistCount) {

            wishlistCount.textContent =
                `${count} item${count !== 1 ? "s" : ""}`;

        }

    }


    // =====================================
    // INITIAL LOAD
    // =====================================

    renderWishlist();

});