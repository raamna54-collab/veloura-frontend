// =====================================
// VELOURA - ACCOUNT.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("ACCOUNT.JS LOADED");


    // =====================================
    // GET LOGGED-IN USER
    // =====================================

    const savedUser =
        localStorage.getItem("velouraUser");


    // User login nahi hai
    if (!savedUser) {

        window.location.href =
            "login.html";

        return;
    }


    // =====================================
    // PARSE USER DATA
    // =====================================

    let user;

    try {

        user = JSON.parse(savedUser);

    } catch (error) {

        console.error(
            "User data error:",
            error
        );

        localStorage.removeItem(
            "velouraUser"
        );

        window.location.href =
            "login.html";

        return;
    }


    // =====================================
    // DISPLAY USER INFORMATION
    // =====================================

    const userName =
        document.getElementById(
            "account-user-name"
        );

    const accountName =
        document.getElementById(
            "account-name"
        );

    const accountEmail =
        document.getElementById(
            "account-email"
        );

    const accountPhone =
        document.getElementById(
            "account-phone"
        );


    if (userName) {

        userName.textContent =
            user.name || "User";

    }


    if (accountName) {

        accountName.value =
            user.name || "";

    }


    if (accountEmail) {

        accountEmail.value =
            user.email || "";

    }


    if (accountPhone) {

        accountPhone.value =
            user.phone || "";

    }


    // =====================================
    // LOGOUT
    // =====================================

    const logoutButton =
        document.getElementById(
            "logout-button"
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const confirmLogout =
                    confirm(
                        "Are you sure you want to logout?"
                    );


                if (!confirmLogout) {
                    return;
                }


                localStorage.removeItem(
                    "velouraUser"
                );


                window.location.href =
                    "login.html";

            }
        );

    }


    // =====================================
    // ACCOUNT TABS
    // =====================================

    const navLinks =
        document.querySelectorAll(
            ".account-nav-link[data-tab]"
        );

    const panels =
        document.querySelectorAll(
            ".account-panel"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const tabId =
                    link.dataset.tab;


                navLinks.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                panels.forEach(panel => {

                    panel.classList.remove(
                        "active"
                    );

                });


                link.classList.add(
                    "active"
                );


                const selectedPanel =
                    document.getElementById(
                        tabId
                    );


                if (selectedPanel) {

                    selectedPanel.classList.add(
                        "active"
                    );

                }

            }
        );

    });


    // =====================================
    // CART COUNT
    // =====================================

    if (
        typeof getCartCount ===
        "function"
    ) {

        const cartCount =
            document.querySelector(
                ".cart-count"
            );


        if (cartCount) {

            cartCount.textContent =
                getCartCount();

        }

    }

});