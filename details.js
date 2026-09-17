document.addEventListener("DOMContentLoaded", async () => {

    // =====================================
    // GET PRODUCT ID FROM URL
    // =====================================

    const params = new URLSearchParams(
        window.location.search
    );

    const idFromURL = params.get("id");

    console.log("Product ID from URL:", idFromURL);

    if (!idFromURL) {
        showProductNotFound(
            "Product ID is missing from the URL."
        );
        return;
    }

    const productId = Number(idFromURL);

    if (!Number.isInteger(productId) || productId <= 0) {

        console.error(
            "Invalid Product ID:",
            idFromURL
        );

        showProductNotFound(
            "Invalid product ID."
        );

        return;
    }


    // =====================================
    // GET PRODUCT FROM API
    // =====================================

    console.log(
        "Loading product:",
        productId
    );

    const product =
        await getProductFromAPI(productId);


    // =====================================
    // PRODUCT NOT FOUND
    // =====================================

    if (!product) {

        showProductNotFound(
            "Sorry, this product could not be found."
        );

        return;
    }


    console.log(
        "Product loaded from API:",
        product
    );


    // =====================================
    // BASIC PRODUCT INFORMATION
    // =====================================

    const brandElement =
        document.getElementById("product-brand");

    const nameElement =
        document.getElementById("product-name");

    const ratingElement =
        document.getElementById(
            "product-rating-value"
        );

    const priceElement =
        document.getElementById("product-price");


    if (brandElement) {
        brandElement.textContent =
            product.brand;
    }

    if (nameElement) {
        nameElement.textContent =
            product.name;
    }

    if (ratingElement) {
        ratingElement.textContent =
            product.rating;
    }

    if (priceElement) {
        priceElement.textContent =
            formatPKR(product.price);
    }


    // =====================================
    // IMAGE
    // =====================================

    const mainImage =
        document.getElementById("main-image");


    if (mainImage) {

        mainImage.src =
            product.img;

        mainImage.alt =
            product.name;

        mainImage.onerror = function () {

            this.onerror = null;

            this.src =
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=700&auto=format&fit=crop";

        };

    }


    // =====================================
    // OLD PRICE + DISCOUNT
    // =====================================

    const oldPriceElement =
        document.getElementById(
            "product-old-price"
        );

    const discountElement =
        document.getElementById(
            "product-discount"
        );


    if (product.oldPrice) {

        if (oldPriceElement) {

            oldPriceElement.textContent =
                formatPKR(product.oldPrice);

        }


        const discount =
            Math.round(
                100 -
                (product.price / product.oldPrice) * 100
            );


        if (discountElement) {

            discountElement.textContent =
                `${discount}% OFF`;

        }

    } else {

        if (oldPriceElement) {
            oldPriceElement.textContent = "";
        }

        if (discountElement) {
            discountElement.textContent = "";
        }

    }


    // =====================================
    // DESCRIPTION
    // =====================================

    const shortDescription =
        document.getElementById(
            "product-description-short"
        );


    if (shortDescription) {

        shortDescription.textContent =
            `Discover the beauty of ${product.name}, specially designed to give you a beautiful and effortless beauty experience.`;

    }


    // =====================================
    // BREADCRUMB
    // =====================================

    const breadcrumbCategory =
        document.getElementById(
            "breadcrumb-category"
        );


    if (breadcrumbCategory) {

        breadcrumbCategory.textContent =
            product.category;

        breadcrumbCategory.href =
            getCategoryPage(
                product.category
            );

    }


    // =====================================
    // SHADES
    // =====================================

    const shadeList =
        document.getElementById("shade-list");


    if (shadeList) {

        const shadeOptions = [
            "Nude",
            "Rose",
            "Berry"
        ];


        shadeList.innerHTML = "";


        shadeOptions.forEach(
            (shade, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "shade-btn";


                if (index === 0) {

                    button.classList.add(
                        "active"
                    );

                }


                button.textContent =
                    shade;


                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                ".shade-btn"
                            )
                            .forEach(btn => {

                                btn.classList.remove(
                                    "active"
                                );

                            });


                        button.classList.add(
                            "active"
                        );

                    }
                );


                shadeList.appendChild(
                    button
                );

            }
        );

    }


    // =====================================
    // SIZE
    // =====================================

    const sizeButtons =
        document.querySelectorAll(
            ".size-btn"
        );


    sizeButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    sizeButtons.forEach(
                        btn => {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    console.log(
                        "Selected Size:",
                        button.textContent.trim()
                    );

                }
            );

        }
    );


    // =====================================
    // QUANTITY
    // =====================================

    let quantity = 1;


    const quantityValue =
        document.getElementById(
            "qty-value"
        );

    const minusButton =
        document.getElementById(
            "qty-minus"
        );

    const plusButton =
        document.getElementById(
            "qty-plus"
        );


    if (minusButton) {

        minusButton.addEventListener(
            "click",
            () => {

                if (quantity > 1) {

                    quantity--;

                    if (quantityValue) {

                        quantityValue.textContent =
                            quantity;

                    }

                }

            }
        );

    }


    if (plusButton) {

        plusButton.addEventListener(
            "click",
            () => {

                quantity++;

                if (quantityValue) {

                    quantityValue.textContent =
                        quantity;

                }

            }
        );

    }


    // =====================================
    // ADD TO CART
    // =====================================

    const addToCartButton =
        document.querySelector(
            ".add-to-cart-btn"
        );


    if (addToCartButton) {

        addToCartButton.addEventListener(
            "click",
            () => {

                addToCart(
                    product.id,
                    quantity
                );

                updateCartCount();

                window.location.href =
                    "cart.html";

            }
        );

    }


    // =====================================
    // BUY NOW
    // =====================================

    const buyNowButton =
        document.querySelector(
            ".buy-now-btn"
        );


    if (buyNowButton) {

        buyNowButton.addEventListener(
            "click",
            () => {

                addToCart(
                    product.id,
                    quantity
                );

                window.location.href =
                    "checkout.html";

            }
        );

    }


    // =====================================
    // WISHLIST
    // =====================================

    const wishlistButton =
        document.querySelector(
            ".details-wishlist-btn"
        );


    if (wishlistButton) {

        updateWishlistButton();


        wishlistButton.addEventListener(
            "click",
            () => {

                if (
                    isInWishlist(
                        product.id
                    )
                ) {

                    removeFromWishlist(
                        product.id
                    );

                } else {

                    addToWishlist(
                        product.id
                    );

                }


                updateWishlistButton();

            }
        );

    }


    // =====================================
    // UPDATE WISHLIST BUTTON
    // =====================================

    function updateWishlistButton() {

        if (!wishlistButton) {
            return;
        }


        const icon =
            wishlistButton.querySelector(
                "i"
            );


        if (
            isInWishlist(
                product.id
            )
        ) {

            wishlistButton.classList.add(
                "active"
            );


            if (icon) {

                icon.classList.remove(
                    "far"
                );

                icon.classList.add(
                    "fas"
                );

            }


            wishlistButton.setAttribute(
                "aria-label",
                "Remove from wishlist"
            );


            wishlistButton.setAttribute(
                "title",
                "Remove from Wishlist"
            );

        } else {

            wishlistButton.classList.remove(
                "active"
            );


            if (icon) {

                icon.classList.remove(
                    "fas"
                );

                icon.classList.add(
                    "far"
                );

            }


            wishlistButton.setAttribute(
                "aria-label",
                "Add to wishlist"
            );


            wishlistButton.setAttribute(
                "title",
                "Add to Wishlist"
            );

        }

    }


    // =====================================
    // CART COUNT
    // =====================================

    function updateCartCount() {

        const cartCount =
            document.querySelector(
                ".cart-count"
            );


        if (cartCount) {

            cartCount.textContent =
                getCartCount();

        }

    }


    updateCartCount();


    // =====================================
    // TABS
    // =====================================

    const tabButtons =
        document.querySelectorAll(
            ".tab-btn"
        );

    const tabPanels =
        document.querySelectorAll(
            ".tab-panel"
        );


    tabButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const targetTab =
                        button.dataset.tab;


                    tabButtons.forEach(
                        btn => {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    tabPanels.forEach(
                        panel => {

                            panel.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    const targetPanel =
                        document.getElementById(
                            targetTab
                        );


                    if (targetPanel) {

                        targetPanel.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );


    // =====================================
    // TAB CONTENT
    // =====================================

    const tabDescription =
        document.getElementById(
            "tab-description"
        );


    if (tabDescription) {

        tabDescription.innerHTML = `
            <p>
                ${product.name} is part of the Veloura
                ${product.category} collection. Designed for
                easy everyday beauty and a comfortable finish.
            </p>
        `;

    }


    const tabIngredients =
        document.getElementById(
            "tab-ingredients"
        );


    if (tabIngredients) {

        tabIngredients.innerHTML = `
            <p>
                Ingredients information will be available soon.
            </p>
        `;

    }


    const tabHowToUse =
        document.getElementById(
            "tab-howtouse"
        );


    if (tabHowToUse) {

        tabHowToUse.innerHTML = `
            <p>
                Use the product as part of your regular beauty
                routine according to your desired look and finish.
            </p>
        `;

    }


    const tabBenefits =
        document.getElementById(
            "tab-benefits"
        );


    if (tabBenefits) {

        tabBenefits.innerHTML = `
            <p>
                Easy to use, beautiful finish and perfect for
                everyday beauty routines.
            </p>
        `;

    }


    // =====================================
    // RELATED PRODUCTS
    // =====================================

    let allProducts = [];


    try {

        allProducts =
            await getProductsFromAPI();

    } catch (error) {

        console.error(
            "Unable to load related products:",
            error
        );

    }


    const relatedProducts =
        allProducts
            .filter(item =>
                item.category === product.category &&
                item.id !== product.id
            )
            .slice(0, 4);


    renderProductGrid(
        "related-grid",
        relatedProducts
    );

});


// =====================================
// PRODUCT NOT FOUND FUNCTION
// =====================================

function showProductNotFound(message) {

    const detailsPage =
        document.getElementById(
            "details-page"
        );


    if (detailsPage) {

        detailsPage.innerHTML = `
            <div class="section-content">

                <h2>Product Not Found</h2>

                <p>
                    ${message}
                </p>

                <a href="makeup.html">
                    Back to Shop
                </a>

            </div>
        `;

    }

}


// =====================================
// CATEGORY PAGE
// =====================================

function getCategoryPage(category) {

    const pages = {

        "Makeup": "makeup.html",

        "Skincare": "skincare.html",

        "Haircare": "haircare.html",

        "Fragrance": "fragrance.html",

        "Bath & Body": "bath-body.html"

    };


    return pages[category] || "index.html";

}