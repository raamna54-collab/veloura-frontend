// =====================================================
// VELOURA PRODUCT API
// =====================================================

const API_URL =
    "https://veloura-backend-tau.vercel.app/api";


// =====================================================
// GET SINGLE PRODUCT
// =====================================================

async function getProductFromAPI(id) {

    try {

        const response =
            await fetch(
                `${API_URL}/products/${id}`
            );


        if (!response.ok) {

            throw new Error(
                "Failed to fetch product"
            );

        }


        const product =
            await response.json();


        return product;

    }

    catch (error) {

        console.error(
            "Single Product API Error:",
            error
        );


        return null;

    }

}


// =====================================================
// GET ALL PRODUCTS
// =====================================================

async function getProductsFromAPI() {

    try {

        const response =
            await fetch(
                `${API_URL}/products`
            );


        if (!response.ok) {

            throw new Error(
                "Failed to fetch products"
            );

        }


        const products =
            await response.json();


        return products;

    }

    catch (error) {

        console.error(
            "Product API Error:",
            error
        );


        return [];

    }

}