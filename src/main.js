window.addEventListener("load", togglesCartShoppig);

const menuIcon = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productShoppingDetail = document.querySelector(
  ".product-shopping-detail"
);
const btnAdd = document.querySelectorAll(".add-shopping-cart");
const orderContent = document.querySelector(".order-content");
const shoppingCount = document.querySelector(".shopping-count");
const totalP = document.querySelector(".total-price");
const arrowIcon = document.querySelector(".arrow");

const productsLocalStorage = "productos";

// nav icon events
menuIcon.addEventListener("click", togglesMobileMenu);

function togglesMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productShoppingDetail.classList.add("inactive");
}

shoppingCartIcon.addEventListener("click", togglesCartShoppig);
arrowIcon.addEventListener("click", togglesCartShoppig);

function togglesCartShoppig() {
  productShoppingDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  loadInfo();
  amountCount();
  totalPrice();
}

// create id and amount attributes
function createAttributes() {
  for (let index in productList) {
    productList[index].id = parseInt(index);
    productList[index].amount = 1;
  }
}

// add icon event
for (let x = 0; x < btnAdd.length; x++) {
  btnAdd[x].addEventListener("click", () => {
    createAttributes();
    let infoProduct = productList[x];
    saveLocaStorage(infoProduct);
    shoppingCount.classList.remove("inactive");
  });
}

function saveLocaStorage(infoProduct) {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave === null) productsSave = [];

  let productExist = productsSave.some(
    (product) => product.id === infoProduct.id
  );

  if (productExist) {
    let newListProducts = productsSave.map((product) => {
      if (product.id === infoProduct.id) {
        product.amount++;
        product.price = infoProduct.price * product.amount;
        return product;
      } else {
        return product;
      }
    });
    products.push(...newListProducts);
  } else {
    products = [...productsSave, infoProduct];
  }

  localStorage.setItem(productsLocalStorage, JSON.stringify(products));
  loadInfo();
  amountCount();
  totalPrice();
}

function loadInfo() {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave !== null) products = productsSave;

  clear();
  products.forEach((product) => {
    orderContent.innerHTML += `
    <div class="shopping-cart">
      <figure>
        <img src=${product.image}>
      </figure>
      <div> 
        <p>Jersey</p>
        <p>${product.name}</p>
        <span onclick="subtract(${product.id})">-</span>
        <span>${product.amount}</span> 
        <span onclick="sum(${product.id})">+</span>
      </div> 
      <p>$${product.price},00</p>
      <img src="../img/close.svg" onclick="deleteRow(${product.id})" alt="close" class="close">
    </div> 
  `;
  });
}

function amountCount() {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave !== null) {
    products = productsSave;
    shoppingCount.classList.remove("inactive");
  }

  let count = 0;
  products.forEach((product) => {
    count += product.amount;
  });

  if (count == 0) {
    shoppingCount.classList.add("inactive");
    productShoppingDetail.classList.toggle("inactive");
  }

  shoppingCount.textContent = count;
}

function totalPrice() {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave !== null) products = productsSave;

  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += product.price;
  });

  totalP.textContent = `$ ${totalPrice},00`;
}

function deleteRow(id) {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave !== null) products = productsSave;

  let newListProducts = products.filter((product) => id !== product.id);

  localStorage.setItem(productsLocalStorage, JSON.stringify(newListProducts));

  loadInfo();
  amountCount();
  totalPrice();
}

function clear() {
  orderContent.innerHTML = "";
}

function sum(id) {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave !== null) products = productsSave;

  let newListProducts = products.map((product) => {
    if (id == product.id) {
      product.price = product.price / product.amount;
      product.amount++;
      product.price = product.price * product.amount;
      return product;
    } else return product;
  });

  localStorage.setItem(productsLocalStorage, JSON.stringify(newListProducts));
  loadInfo();
  amountCount();
  totalPrice();
}

function subtract(id) {
  let products = [];
  let productsSave = JSON.parse(localStorage.getItem(productsLocalStorage));

  if (productsSave !== null) products = productsSave;

  let newListProducts = products.map((product) => {
    if (id == product.id) {
      if (product.amount > 1) {
        product.price = product.price / product.amount;
        product.amount--;
        product.price = product.price * product.amount;
        return product;
      } else return product;
    } else return product;
  });

  localStorage.setItem(productsLocalStorage, JSON.stringify(newListProducts));
  loadInfo();
  amountCount();
  totalPrice();
}

