const menuIcon = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productShoppingDetail = document.querySelector(".product-shopping-detail");


menuIcon.addEventListener("click", togglesMobileMenu);

function togglesMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productShoppingDetail.classList.add("inactive");
}

shoppingCartIcon.addEventListener("click", togglesCartShoppig);

function togglesCartShoppig() {
  productShoppingDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
}


