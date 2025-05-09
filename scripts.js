// =======================
// Page Load Logic
// =======================
document.addEventListener("DOMContentLoaded", () => {
    // Example: Safely change text content of elements
   
    // Example: Add event listener to buttons (if they exist)
     const buttons = document.querySelectorAll(".btns button");
     buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            //alert(`Button ${index + 1} clicked!`);
        });
    });

    // =======================
    // Mobile Navigation Toggle
    // =======================
    const toggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");

    if (toggle && navList) {
        toggle.addEventListener("click", () => {
            navList.classList.toggle("active");
        });
    }

    // Optional: Close menu when a nav link is clicked (for single-page apps or better UX)
    const navLinks = document.querySelectorAll("#nav-list a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navList.classList.contains("active")) {
                navList.classList.remove("active");
            }
        });
    });
});
