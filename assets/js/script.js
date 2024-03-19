'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// Other JavaScript code...

function filterProducts(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active'); // Highlight the active button
    }
  });

  const productItems = document.querySelectorAll('.product-item');
  productItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block'; // Display products that match the category or show all if 'all' is selected
    } else {
      item.style.display = 'none'; // Hide products that don't match the category
    }
  });
}

// Other JavaScript code...
