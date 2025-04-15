// ========== DOM Ready ==========
document.addEventListener("DOMContentLoaded", () => {
    // Update title and subtitle if they exist
    const title = document.querySelector(".title");
    if (title) {
      title.textContent = "Welcome to BS Tech!";
    }
  
    const subtitle = document.querySelector(".sub_title");
    if (subtitle) {
      subtitle.textContent = "Small Business & Home IT Support";
    }
  
    // Close menu on nav link click (mobile UX)
    const navLinks = document.querySelectorAll("nav .menu ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const menuList = document.querySelector("nav .menu ul");
        if (menuList.classList.contains("active")) {
          menuList.classList.remove("active");
          console.log("Menu closed via link click");
        }
      });
    });
  
    // Attach toggle to the hamburger
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", toggleMenu);
      console.log("Menu toggle initialized");
    } else {
      console.error("Menu toggle not found in DOM");
    }
  });
  
  // ========== Toggle Mobile Menu ==========
  function toggleMenu() {
    const menuList = document.querySelector("nav .menu ul");
    if (menuList) {
      menuList.classList.toggle("active");
      console.log("Menu toggled, active:", menuList.classList.contains("active"));
    } else {
      console.error("Menu list not found");
    }
  }