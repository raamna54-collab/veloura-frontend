// =====================================
// VELOURA - STORAGE.JS
// Cart + Wishlist Storage
// =====================================


// =====================================
// CART FUNCTIONS
// =====================================

// Cart localStorage se lena
function getCart() {

    const cart = localStorage.getItem("velouraCart");

    if (!cart) {
        return [];
    }

    return JSON.parse(cart);
}


// Cart save karna
function saveCart(cart) {

    localStorage.setItem(
        "velouraCart",
        JSON.stringify(cart)
    );

}


// Product cart mein add karna
function addToCart(productId, quantity = 1) {

    const cart = getCart();

    const existingItem = cart.find(
        item => item.productId === productId
    );


    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({
            productId: productId,
            quantity: quantity
        });

    }


    saveCart(cart);

    return cart;
}


// Cart se product remove
function removeFromCart(productId) {

    let cart = getCart();

    cart = cart.filter(
        item => item.productId !== productId
    );

    saveCart(cart);

    return cart;
}


// Quantity update
function updateCartQuantity(productId, quantity) {

    const cart = getCart();

    const item = cart.find(
        item => item.productId === productId
    );


    if (item) {

        if (quantity <= 0) {

            removeFromCart(productId);

        } else {

            item.quantity = quantity;

            saveCart(cart);

        }

    }

    return getCart();
}


// Cart empty karna
function clearCart() {

    localStorage.removeItem("velouraCart");

}


// Total cart quantity
function getCartCount() {

    const cart = getCart();

    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

}


// =====================================
// WISHLIST FUNCTIONS
// =====================================

// Wishlist localStorage se lena
function getWishlist() {

    const wishlist =
        localStorage.getItem("velouraWishlist");

    if (!wishlist) {
        return [];
    }

    return JSON.parse(wishlist);
}


// Wishlist save karna
function saveWishlist(wishlist) {

    localStorage.setItem(
        "velouraWishlist",
        JSON.stringify(wishlist)
    );

}


// Wishlist mein product add karna
function addToWishlist(productId) {

    const wishlist = getWishlist();

    const alreadyExists =
        wishlist.includes(productId);


    if (!alreadyExists) {

        wishlist.push(productId);

        saveWishlist(wishlist);

    }

    return wishlist;
}


// Wishlist se product remove karna
function removeFromWishlist(productId) {

    let wishlist = getWishlist();

    wishlist = wishlist.filter(
        id => id !== productId
    );

    saveWishlist(wishlist);

    return wishlist;
}


// Check karna product wishlist mein hai ya nahi
function isInWishlist(productId) {

    const wishlist = getWishlist();

    return wishlist.includes(productId);

}


// Wishlist count
function getWishlistCount() {

    return getWishlist().length;

}


// Wishlist completely empty karna
function clearWishlist() {

    localStorage.removeItem(
        "velouraWishlist"
    );

}