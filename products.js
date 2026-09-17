// Veloura - Product Catalog

const veloraProducts = [
    {
        id: 1,
        name: "Velvet Matte Lipstick",
        brand: "Veloura",
        category: "Makeup",
        sub: "Lips",
        price: 1490,
        oldPrice: 1890,
        rating: 4.5,
        badge: "New",
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Glow Serum Foundation",
        brand: "Veloura",
        category: "Makeup",
        sub: "Face",
        price: 2290,
        oldPrice: null,
        rating: 4.7,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Rose Quartz Blush Duo",
        brand: "Veloura",
        category: "Makeup",
        sub: "Cheeks",
        price: 1690,
        oldPrice: 1990,
        rating: 4.3,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1583241800698-e8ab01c85a35?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Champagne Highlighter Palette",
        brand: "Veloura",
        category: "Makeup",
        sub: "Cheeks",
        price: 1990,
        oldPrice: null,
        rating: 4.6,
        badge: "New",
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Precision Eyeliner Pen",
        brand: "Veloura",
        category: "Makeup",
        sub: "Eyes",
        price: 990,
        oldPrice: null,
        rating: 4.4,
        badge: null,
        img: "https://images.unsplash.com/photo-1583241800698-e8ab01c85a35?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Silk Kabuki Brush Set",
        brand: "Veloura",
        category: "Makeup",
        sub: "Brushes & Tools",
        price: 2190,
        oldPrice: 2590,
        rating: 4.8,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Featherlight Mascara",
        brand: "Veloura",
        category: "Makeup",
        sub: "Eyes",
        price: 1190,
        oldPrice: null,
        rating: 4.5,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1583241800698-e8ab01c85a35?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Nude Edit Lip Gloss",
        brand: "Veloura",
        category: "Makeup",
        sub: "Lips",
        price: 890,
        oldPrice: null,
        rating: 4.2,
        badge: "New",
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500&auto=format&fit=crop"
    },

    {
        id: 9,
        name: "Hydra Boost Face Serum",
        brand: "Veloura",
        category: "Skincare",
        sub: "Serums",
        price: 2590,
        oldPrice: null,
        rating: 4.8,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "Gentle Foaming Cleanser",
        brand: "Veloura",
        category: "Skincare",
        sub: "Cleansers",
        price: 1290,
        oldPrice: null,
        rating: 4.6,
        badge: "New",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 11,
        name: "Rosewater Balancing Toner",
        brand: "Veloura",
        category: "Skincare",
        sub: "Toners",
        price: 1090,
        oldPrice: 1290,
        rating: 4.4,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 12,
        name: "Overnight Repair Moisturizer",
        brand: "Veloura",
        category: "Skincare",
        sub: "Moisturizers",
        price: 1990,
        oldPrice: null,
        rating: 4.7,
        badge: null,
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 13,
        name: "Daily Defense SPF 50",
        brand: "Veloura",
        category: "Skincare",
        sub: "Sunscreen",
        price: 1590,
        oldPrice: null,
        rating: 4.6,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 14,
        name: "Clay Purify Face Mask",
        brand: "Veloura",
        category: "Skincare",
        sub: "Face Masks",
        price: 1390,
        oldPrice: 1650,
        rating: 4.3,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 15,
        name: "Bright Eye Depuff Gel",
        brand: "Veloura",
        category: "Skincare",
        sub: "Eye Care",
        price: 1490,
        oldPrice: null,
        rating: 4.5,
        badge: "New",
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 16,
        name: "Honey Lip Sleeping Mask",
        brand: "Veloura",
        category: "Skincare",
        sub: "Lip Care",
        price: 890,
        oldPrice: null,
        rating: 4.6,
        badge: null,
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop"
    },

    {
        id: 17,
        name: "Silk Repair Hair Oil",
        brand: "Veloura",
        category: "Haircare",
        sub: "Hair Oil",
        price: 1890,
        oldPrice: 2290,
        rating: 4.4,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1626015449490-5698d3d941e9?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 18,
        name: "Volumizing Shampoo",
        brand: "Veloura",
        category: "Haircare",
        sub: "Shampoo",
        price: 1290,
        oldPrice: null,
        rating: 4.5,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 19,
        name: "Deep Moisture Conditioner",
        brand: "Veloura",
        category: "Haircare",
        sub: "Conditioner",
        price: 1290,
        oldPrice: null,
        rating: 4.5,
        badge: null,
        img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 20,
        name: "Frizz Control Serum",
        brand: "Veloura",
        category: "Haircare",
        sub: "Hair Serum",
        price: 1590,
        oldPrice: null,
        rating: 4.3,
        badge: "New",
        img: "https://images.unsplash.com/photo-1626015449490-5698d3d941e9?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 21,
        name: "Weekly Repair Hair Mask",
        brand: "Veloura",
        category: "Haircare",
        sub: "Hair Mask",
        price: 1790,
        oldPrice: 2090,
        rating: 4.6,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 22,
        name: "Heat Shield Styling Spray",
        brand: "Veloura",
        category: "Haircare",
        sub: "Hair Styling",
        price: 1190,
        oldPrice: null,
        rating: 4.2,
        badge: null,
        img: "https://images.unsplash.com/photo-1626015449490-5698d3d941e9?q=80&w=500&auto=format&fit=crop"
    },

    {
        id: 23,
        name: "Rose Oud Eau de Parfum",
        brand: "Veloura",
        category: "Fragrance",
        sub: "Perfumes",
        price: 3490,
        oldPrice: null,
        rating: 4.9,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 24,
        name: "Citrus Bloom Body Mist",
        brand: "Veloura",
        category: "Fragrance",
        sub: "Body Mists",
        price: 1190,
        oldPrice: null,
        rating: 4.4,
        badge: "New",
        img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 25,
        name: "Velvet Amber Parfum",
        brand: "Veloura",
        category: "Fragrance",
        sub: "Perfumes",
        price: 3190,
        oldPrice: 3690,
        rating: 4.7,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 26,
        name: "Discovery Fragrance Set",
        brand: "Veloura",
        category: "Fragrance",
        sub: "Fragrance Sets",
        price: 2890,
        oldPrice: null,
        rating: 4.5,
        badge: null,
        img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=500&auto=format&fit=crop"
    },

    {
        id: 27,
        name: "Vanilla Bloom Body Wash",
        brand: "Veloura",
        category: "Bath & Body",
        sub: "Body Wash",
        price: 990,
        oldPrice: null,
        rating: 4.4,
        badge: "New",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 28,
        name: "Sugar Rose Body Scrub",
        brand: "Veloura",
        category: "Bath & Body",
        sub: "Body Scrub",
        price: 1290,
        oldPrice: 1490,
        rating: 4.6,
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 29,
        name: "Shea Butter Body Lotion",
        brand: "Veloura",
        category: "Bath & Body",
        sub: "Body Lotion",
        price: 1090,
        oldPrice: null,
        rating: 4.7,
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 30,
        name: "Softening Hand Cream Trio",
        brand: "Veloura",
        category: "Bath & Body",
        sub: "Hand Care",
        price: 890,
        oldPrice: null,
        rating: 4.5,
        badge: null,
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500&auto=format&fit=crop"
    }
];


// Price formatting
function formatPKR(price) {
    return "Rs. " + Number(price).toLocaleString("en-PK");
}


// Product card
function renderProductCard(product) {

    const discount = product.oldPrice
        ? Math.round(100 - (product.price / product.oldPrice) * 100)
        : null;

    return `
        <article class="product-card">

            <a href="product-details.html?id=${product.id}" class="product-image-link">

                <div class="product-image-wrap">

                    ${product.badge
                        ? `<span class="product-badge">${product.badge}</span>`
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

                <p class="product-brand">${product.brand}</p>

                <h3 class="product-name">
                    <a href="product-details.html?id=${product.id}">
                        ${product.name}
                    </a>
                </h3>

                <div class="product-rating">
                    <span>★</span>
                    <span>${product.rating}</span>
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

                <button
                    class="add-to-cart-btn"
                    data-product-id="${product.id}"
                >
                    Add to Cart
                </button>

            </div>

        </article>
    `;
}


// Render product grid
// Render product grid
function renderProductGrid(containerId, products) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Product grid not found:", containerId);
        return;
    }

    if (!products || products.length === 0) {
        container.innerHTML = `
            <p class="no-products">No products found.</p>
        `;
        return;
    }

    container.innerHTML = products
        .map(product => renderProductCard(product))
        .join("");
}
