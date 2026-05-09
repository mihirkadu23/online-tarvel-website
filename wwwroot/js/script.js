script.js
console.log("JS Loaded");
//// Alert to check if JS file is loaded
//console.log("script.js loaded");

//// Wait for DOM to load
//document.addEventListener("DOMContentLoaded", function () {


//    // Navbar logo hover info

//    const wrapper = document.querySelector(".logo-wrapper");
//    const aboutBox = document.getElementById("aboutBox");

//    if(wrapper && aboutBox) {
//        wrapper.addEventListener("mouseenter", function () {
//            aboutBox.style.display = "block";
//        });

//        wrapper.addEventListener("mouseleave", function () {
//            aboutBox.style.display = "none";
//        });
//    }


//    // Search form redirect

//    const searchForm = document.getElementById("searchForm");
//    const searchInput = document.getElementById("searchInput");

//    if(searchForm && searchInput) {
//        searchForm.addEventListener("submit", function(e) {
//            e.preventDefault();
//            const search = searchInput.value.trim().toLowerCase();

//            if(search === "") {
//                alert("Please enter a destination");
//                return;
//            }

//            const destinations = {
//                "goa": "goa.html",
//                "jaipur": "jaipurdetails.html",
//                "lakshadweep": "lakshdeepdetails.html",
//                "rajasthan": "rajsthandetails.html",
//                "mumbai": "mumbai.html",
//                "jammu": "jamukashmir.html",
//                "kashmir": "jamukashmir.html",
//                "manali": "manali.html",
//                "gujarat": "gujrat.html",
//                "kerala": "kerla.html",
//                "packages":"packages.html",
//                "gold": "gold.html",
//                "category packages": "packages.html"
//            };

//            if(destinations[search]) {
//                window.location.href = destinations[search];
//            } else {
//                alert("Destination not found!");
//            }
//        });
//    }



//// Contact Form Validation

//const contactForm = document.getElementById("contactForm");
//const contactToast = document.getElementById("liveToast");

//if (contactForm && contactToast) {
//  contactForm.addEventListener("submit", function (e) {
//    e.preventDefault();

//    const firstName = document.getElementById("cFirstName").value.trim();
//    const lastName  = document.getElementById("cLastName").value.trim();
//    const email     = document.getElementById("cEmail").value.trim();
//    const address   = document.getElementById("cAddress").value.trim();
//    const city      = document.getElementById("cCity").value.trim();
//    const state     = document.getElementById("cState").value;
//    const zip       = document.getElementById("cZip").value.trim();
//    const message   = document.getElementById("cMessage").value.trim();
//    const checkbox  = document.getElementById("cCheck");

//    if (firstName === "") {
//      alert("First name is required");
//      return;
//    }

//    if (lastName === "") {
//      alert("Last name is required");
//      return;
//    }

//    if (email === "") {
//      alert("Email is required");
//      return;
//    }

//    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if (!emailPattern.test(email)) {
//      alert("Enter a valid email");
//      return;
//    }

//    if (address === "") {
//      alert("Address is required");
//      return;
//    }

//    if (city === "") {
//      alert("City is required");
//      return;
//    }

//    if (state === "Choose State") {
//      alert("Please select state");
//      return;
//    }

//    if (zip === "" || isNaN(zip) || zip.length < 5) {
//      alert("Enter valid zip code");
//      return;
//    }

//    if (message === "") {
//      alert("Please enter your message");
//      return;
//    }

//    if (!checkbox.checked) {
//      alert("Please accept the checkbox");
//      return;
//    }

//    // SUCCESS
//    new bootstrap.Toast(contactToast).show();
//    contactForm.reset();
//  });
//}







//    // Navbar background on scroll

//    const navbar = document.querySelector(".navbar");
//    if(navbar) {
//        window.addEventListener("scroll", function() {
//            if(window.scrollY > 50) navbar.classList.add("bg-primary");
//            else navbar.classList.remove("bg-dark");
//        });
//    }

//});



//   document.addEventListener("DOMContentLoaded", function () {

//  const form = document.getElementById("signupForm");

//  form.addEventListener("submit", function (e) {
//    e.preventDefault();

//    const firstName = document.getElementById("firstName").value.trim();
//    const lastName  = document.getElementById("lastName").value.trim();
//    const email     = document.getElementById("email").value.trim();
//    const password  = document.getElementById("password").value.trim();
//    const state     = document.getElementById("state").value;
//    const checkbox  = document.getElementById("gridCheck");

//    //  VALIDATIONS (each must STOP execution)
//    if (firstName === "") {
//      alert("First name required");
//      return; //  STOP HERE
//    }

//    if (lastName === "") {
//      alert("Last name required");
//      return;
//    }

//    if (email === "") {
//      alert("Email required");
//      return;
//    }

//    if (!email.includes("@")) {
//      alert("Invalid email");
//      return;
//    }

//    if (password.length < 6) {
//      alert("Password must be at least 6 characters");
//      return;
//    }

//    if (state === "Choose State") {
//      alert("Please select state");
//      return;
//    }

//    if (!checkbox.checked) {
//      alert("Please accept checkbox");
//      return;
//    }

//    //  SUCCESS
//    const toastEl = document.getElementById("liveToast");
//    const toast = new bootstrap.Toast(toastEl);
//    toast.show();

//    form.reset();
//  });
//});

//function nextBtn() {
//  window.location.href = "index.html";
//}

////$(document).ready(function () {

////    $("#packageSelect").on("change", function () {
////        let price = $(this).val();
////        let type = $(this).find(":selected").data("type");

////        $("#totalAmount").text("₹" + price);

////        $("#packageInfo")
////            .removeClass("d-none gold silver diamond")
////            .addClass(type.toLowerCase())
////            .html(`
////                <h5>${type} Package</h5>
////                <p>
////                    ✔ Hotel Stay<br>
////                    ✔ Travel Included<br>
////                    ✔ Food Provided<br>
////                    ✔ Sightseeing
////                </p>
////            `);
////    });




//    function validateForm() {
//        if (!$("#packageSelect").val()) {
//            alert("Please select a package");
//            return false;
//        }
//        if ($("#fullName").val().trim() === "") {
//            alert("Enter full name");
//            return false;
//        }

//        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//        if (!emailPattern.test($("#email").val())) {
//            alert("Enter valid email");
//            return false;
//        }

//        if ($("#mobile").val().length !== 10 || isNaN($("#mobile").val())) {
//            alert("Enter valid mobile number");
//            return false;
//        }
//        return true;
//    }

//});

//$(document).ready(function () {

//    $("#packageSelect").on("change", function () {
//        let price = $(this).val();
//        let type = $(this).find(":selected").data("type");

//        $("#totalAmount").text("₹" + price);

//        $("#packageInfo")
//            .removeClass("d-none gold silver diamond")
//            .addClass(type?.toLowerCase())
//            .html(`
//                <h5>${type} Package</h5>
//                <p>
//                    ✔ Hotel Stay<br>
//                    ✔ Travel Included<br>
//                    ✔ Food Provided<br>
//                    ✔ Sightseeing
//                </p>
//            `);
//    });

//    // ❌ NO REDIRECT HERE

//});

////$(document).ready(function () {

////    if ($("#payId").length && $("#paymentDetails").length) {

////        let data = JSON.parse(localStorage.getItem("paymentDetails"));

////        if (!data) return;

////        $("#payId").text(data.paymentId);

////        $("#paymentDetails").html(`
////            <p><strong>Name:</strong> ${data.name}</p>
////            <p><strong>Email:</strong> ${data.email}</p>
////            <p><strong>Mobile:</strong> ${data.mobile}</p>
////            <p><strong>Package:</strong> ${data.package}</p>
////            <p><strong>Amount Paid:</strong> ${data.amount}</p>
////            <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
////        `);
////    }
////});



////$("#paymentSelect").on("change", function () {
////    $("#cardBox, #upiBox, #netBox").hide();

////    if (this.value === "card") $("#cardBox").show();
////    if (this.value === "upi") $("#upiBox").show();
////    if (this.value === "netbanking") $("#netBox").show();
////});
// script.js

document.addEventListener("DOMContentLoaded", function () {

    // ================= NAVBAR HOVER =================
    const wrapper = document.querySelector(".logo-wrapper");
    const aboutBox = document.getElementById("aboutBox");

    if (wrapper && aboutBox) {
        wrapper.addEventListener("mouseenter", () => aboutBox.style.display = "block");
        wrapper.addEventListener("mouseleave", () => aboutBox.style.display = "none");
    }

    // ================= SEARCH (MVC ROUTING) =================
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const search = searchInput.value.trim().toLowerCase();

            if (!search) {
                alert("Please enter a destination");
                return;
            }

            const routes = {
                "goa": "/Home/Goa",
                "jaipur": "/Home/Jaipurdetails",
                "lakshadweep": "/Home/Lakshdeepdetails",
                "rajasthan": "/Home/Rajasthandetails",
                "mumbai": "/Home/Mumbai",
                "kashmir": "/Home/Jamukashmir",
                "manali": "/Home/Manali",
                "gujarat": "/Home/Gujrat",
                "kerala": "/Home/Kerla",
                "packages": "/Home/Packages",
                "gold": "/Home/Gold"
            };

            if (routes[search]) {
                window.location.href = routes[search];
            } else {
                alert("Destination not found!");
            }
        });
    }

    // ================= PACKAGE PRICE =================
    const packageSelect = document.getElementById("packageSelect");
    const totalAmount = document.getElementById("totalAmount");
    const amountField = document.getElementById("amountField");

    if (packageSelect && totalAmount && amountField) {

        packageSelect.addEventListener("change", function () {
            const selected = this.options[this.selectedIndex];

            // get price from data attribute
            const price = selected.getAttribute("data-price");

            if (price) {
                totalAmount.innerText = price;
                amountField.value = price;
            } else {
                totalAmount.innerText = "0";
                amountField.value = "0";
            }
        });

        // ✅ OPTIONAL: set default if already selected
        const initial = packageSelect.options[packageSelect.selectedIndex];
        const initialPrice = initial.getAttribute("data-price");

        if (initialPrice) {
            totalAmount.innerText = initialPrice;
            amountField.value = initialPrice;
        }
    }



/* JS for Star Rating*/
    


    // ================= STAR RATING =================
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("ratingValue");
    const ratingError = document.getElementById("ratingError");

    if (stars.length > 0 && ratingValue) {

        stars.forEach(star => {
            star.addEventListener("click", function () {
                let value = this.getAttribute("data-value");

                // Set hidden input value
                ratingValue.value = value;

                // Fill stars
                stars.forEach(s => {
                    s.textContent = s.getAttribute("data-value") <= value ? "★" : "☆";
                });

                // Clear error
                if (ratingError) ratingError.textContent = "";
            });
        });

        // Form validation
        const form = document.querySelector("form");

        if (form) {
            form.addEventListener("submit", function (e) {
                if (ratingValue.value == "0") {
                    e.preventDefault();
                    if (ratingError) {
                        ratingError.textContent = "Please select a rating ⭐";
                    }
                }
            });
        }
    }

});