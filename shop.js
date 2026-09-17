// =====================================
// VELOURA - SHOP.JS
// =====================================

document.addEventListener("DOMContentLoaded", async () => {

    console.log("SHOP.JS LOADED");


    const shopPage =
        document.getElementById("shop-page");


    if (!shopPage) {

        console.log(
            "shop-page not found"
        );

        return;
    }


    const shopGrid =
        document.getElementById(
            "shop-grid"
        );

    const resultCount =
        document.getElementById(
            "result-count"
        );

    const sortSelect =
        document.getElementById(
            "sort-select"
        );

    const subFilterList =
        document.getElementById(
            "sub-filter-list"
        );

    const clearFiltersBtn =
        document.getElementById(
            "clear-filters"
        );


    const currentCategory =
        shopPage.dataset.category;

    const mode =
        shopPage.dataset.mode;


    let allProducts = [];


    // =====================================
    // LOAD PRODUCTS FROM API
    // =====================================

    try {

        allProducts =
            await getProductsFromAPI();


        console.log(
            "Products loaded from API:",
            allProducts.length
        );

    } catch (error) {

        console.error(
            "Unable to load products:",
            error
        );


        if (shopGrid) {

            shopGrid.innerHTML = `
                <p class="no-products">
                    Unable to load products.
                    Please try again.
                </p>
            `;

        }

        return;
    }


    // =====================================
    // CATEGORY / ALL PRODUCTS
    // =====================================

    let categoryProducts;


    if (
        mode === "sale" ||
        mode === "new"
    ) {

        categoryProducts =
            [...allProducts];

    } else {

        categoryProducts =
            allProducts.filter(
                product =>
                    product.category ===
                    currentCategory
            );

    }


    let filteredProducts =
        [...categoryProducts];


    let selectedSubCategory =
        "All";


    let selectedPrice =
        Infinity;


    // =====================================
    // CREATE SUB FILTERS
    // =====================================

    function createSubFilters() {

        if (!subFilterList) {
            return;
        }


        const subCategories = [
            ...new Set(
                categoryProducts
                    .map(
                        product =>
                            product.sub
                    )
                    .filter(Boolean)
            )
        ];


        subFilterList.innerHTML = `
            <label class="filter-radio">

                <input
                    type="radio"
                    name="sub-category"
                    value="All"
                    checked
                >

                All

            </label>
        `;


        subCategories.forEach(sub => {

            subFilterList.innerHTML += `
                <label class="filter-radio">

                    <input
                        type="radio"
                        name="sub-category"
                        value="${sub}"
                    >

                    ${sub}

                </label>
            `;

        });


        const subInputs =
            subFilterList.querySelectorAll(
                'input[name="sub-category"]'
            );


        subInputs.forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    selectedSubCategory =
                        input.value;

                    applyFilters();

                }
            );

        });

    }


    // =====================================
    // PRICE FILTER
    // =====================================

    function setupPriceFilters() {

        const priceInputs =
            document.querySelectorAll(
                'input[name="price"]'
            );


        priceInputs.forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    selectedPrice =
                        input.value ===
                        "Infinity"
                            ? Infinity
                            : Number(
                                input.value
                            );


                    applyFilters();

                }
            );

        });

    }


    // =====================================
    // APPLY FILTERS
    // =====================================

    function applyFilters() {

        filteredProducts =
            categoryProducts.filter(
                product => {

                    const subMatch =
                        selectedSubCategory ===
                        "All" ||
                        product.sub ===
                        selectedSubCategory;


                    const priceMatch =
                        product.price <=
                        selectedPrice;


                    return (
                        subMatch &&
                        priceMatch
                    );

                }
            );


        sortProducts();

    }


    // =====================================
    // SORT PRODUCTS
    // =====================================

    function sortProducts() {

        const sortValue =
            sortSelect
                ? sortSelect.value
                : "featured";


        let productsToRender =
            [...filteredProducts];


        if (
            sortValue ===
            "price-asc"
        ) {

            productsToRender.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        else if (
            sortValue ===
            "price-desc"
        ) {

            productsToRender.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        else if (
            sortValue ===
            "rating"
        ) {

            productsToRender.sort(
                (a, b) =>
                    b.rating - a.rating
            );

        }


        else if (
            sortValue ===
            "newest"
        ) {

            productsToRender.sort(
                (a, b) =>
                    b.id - a.id
            );

        }


        renderProducts(
            productsToRender
        );

    }


    // =====================================
    // RENDER PRODUCTS
    // =====================================

    function renderProducts(products) {

        if (!shopGrid) {
            return;
        }


        renderProductGrid(
            "shop-grid",
            products
        );


        // =====================================
        // RESULT COUNT
        // =====================================

        if (resultCount) {

            resultCount.textContent =
                `${products.length} product${
                    products.length !== 1
                        ? "s"
                        : ""
                }`;

        }


        // =====================================
        // ADD TO CART
        // =====================================

        const addToCartButtons =
            shopGrid.querySelectorAll(
                ".add-to-cart-btn"
            );


        console.log(
            "Add to Cart buttons found:",
            addToCartButtons.length
        );


        addToCartButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const productId =
                            Number(
                                button.dataset
                                    .productId
                            );


                        console.log(
                            "ADD TO CART CLICKED:",
                            productId
                        );


                        if (!productId) {

                            console.error(
                                "Product ID not found!"
                            );

                            return;
                        }


                        // =====================================
                        // ADD PRODUCT TO CART
                        // =====================================

                        addToCart(
                            productId,
                            1
                        );


                        console.log(
                            "Product added to cart:",
                            productId
                        );


                        // =====================================
                        // UPDATE CART COUNT
                        // =====================================

                        if (
                            typeof updateCartCount ===
                            "function"
                        ) {

                            updateCartCount();

                        }


                        // =====================================
                        // GO TO CART
                        // =====================================

                        window.location.href =
                            "cart.html";

                    }
                );

            }
        );

    }


    // =====================================
    // SORT CHANGE
    // =====================================

    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            () => {

                sortProducts();

            }
        );

    }


    // =====================================
    // CLEAR FILTERS
    // =====================================

    if (clearFiltersBtn) {

        clearFiltersBtn.addEventListener(
            "click",
            () => {

                selectedSubCategory =
                    "All";


                selectedPrice =
                    Infinity;


                const allSubInput =
                    document.querySelector(
                        'input[name="sub-category"][value="All"]'
                    );


                if (allSubInput) {

                    allSubInput.checked =
                        true;

                }


                const allPriceInput =
                    document.querySelector(
                        'input[name="price"][value="Infinity"]'
                    );


                if (allPriceInput) {

                    allPriceInput.checked =
                        true;

                }


                if (sortSelect) {

                    sortSelect.value =
                        "featured";

                }


                applyFilters();

            }
        );

    }


    // =====================================
    // START
    // =====================================

    createSubFilters();

    setupPriceFilters();

    applyFilters();

});