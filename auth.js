document.addEventListener("DOMContentLoaded", () => {

    console.log("AUTH.JS LOADED");


    // =====================================================
    // REGISTER
    // =====================================================

    const registerForm =
        document.getElementById("register-form");

    if (registerForm) {

        registerForm.addEventListener("submit", async (event) => {

            event.preventDefault();

            const name =
                document
                    .getElementById("register-name")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("register-email")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("register-phone")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("register-password")
                    .value;

            const confirmPassword =
                document
                    .getElementById("register-confirm-password")
                    .value;


            // Check password
            if (password !== confirmPassword) {

                alert("Passwords do not match!");

                return;
            }


            // Check password length
            if (password.length < 6) {

                alert(
                    "Password must be at least 6 characters long."
                );

                return;
            }


            try {

                const response = await fetch(
                    "https://veloura-backend-tau.vercel.app/api/auth/register",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            name: name,
                            email: email,
                            phone: phone,
                            password: password
                        })
                    }
                );


                const data =
                    await response.json();


                if (!response.ok) {

                    alert(
                        data.message ||
                        "Registration failed!"
                    );

                    return;
                }


                alert(
                    "Account created successfully! Please login."
                );


                registerForm.reset();


                window.location.href =
                    "login.html";

            } catch (error) {

                console.error(
                    "Registration Error:",
                    error
                );

                alert(
                    "Unable to connect to server. Please try again."
                );
            }

        });

    }


    // =====================================================
    // LOGIN
    // =====================================================

    const loginForm =
        document.getElementById("login-form");


    if (loginForm) {

        loginForm.addEventListener("submit", async (event) => {

            event.preventDefault();


            const email =
                document
                    .getElementById("login-email")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("login-password")
                    .value;


            try {

                const response = await fetch(
                    "https://veloura-backend-tau.vercel.app/api/auth/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    }
                );


                const data =
                    await response.json();


                if (!response.ok) {

                    alert(
                        data.message ||
                        "Login failed!"
                    );

                    return;
                }


                // Save logged-in user
                localStorage.setItem(
                    "velouraUser",
                    JSON.stringify(data.user)
                );


                alert(
                    "Login successful! Welcome to Veloura."
                );


                window.location.href =
                    "account.html";

            } catch (error) {

                console.error(
                    "Login Error:",
                    error
                );

                alert(
                    "Unable to connect to server. Please try again."
                );
            }

        });

    }


    // =====================================================
    // PASSWORD SHOW / HIDE
    // =====================================================

    const toggleButtons =
        document.querySelectorAll(".toggle-password");


    toggleButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId =
                button.dataset.target;


            const passwordInput =
                document.getElementById(targetId);


            if (!passwordInput) {
                return;
            }


            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                button.classList.remove(
                    "fa-eye"
                );

                button.classList.add(
                    "fa-eye-slash"
                );

            } else {

                passwordInput.type = "password";

                button.classList.remove(
                    "fa-eye-slash"
                );

                button.classList.add(
                    "fa-eye"
                );

            }

        });

    });


    // =====================================================
    // GOOGLE LOGIN / REGISTER
    // =====================================================

    const googleLoginButton =
        document.getElementById("google-login-btn");


    if (googleLoginButton) {

        googleLoginButton.addEventListener(
            "click",
            () => {

                alert(
                    "Google Login will be connected after Google OAuth setup."
                );

            }
        );

    }


    const googleRegisterButton =
        document.getElementById("google-register-btn");


    if (googleRegisterButton) {

        googleRegisterButton.addEventListener(
            "click",
            () => {

                alert(
                    "Google Sign Up will be connected after Google OAuth setup."
                );

            }
        );

    }


    // =====================================================
    // FACEBOOK LOGIN
    // =====================================================

    const facebookLoginButton =
        document.getElementById("facebook-login-btn");


    if (facebookLoginButton) {

        facebookLoginButton.addEventListener(
            "click",
            () => {

                alert(
                    "Facebook Login will be connected later."
                );

            }
        );

    }

});