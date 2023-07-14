// SHOPPING CART-----------------------------------------------------------

window.addEventListener("load", togglesCartShoppig);
const menuIcon = document.querySelector(".icon-menu");
const signOut = document.querySelector(".sign-out");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuTop = document.querySelectorAll(".mobile-menu-top li");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productShoppingDetail = document.querySelector(".product-shopping-detail");
const shoppingSearchIcon = document.querySelector(".navbar-search");
const searchShoppingDetail = document.querySelector(".search");
const btnAdd = document.querySelectorAll(".add-shopping-cart");
const orderContent = document.querySelector(".order-content");
const shoppingCount = document.querySelector(".shopping-count");
const totalP = document.querySelector(".total-price");
const arrowIcon = document.querySelector(".arrow");

const productsLocalStorage = "productos";


menuIcon.addEventListener("click", togglesMobileMenu);
menuIcon.addEventListener("click", productsList);
signOut.addEventListener("click", togglesMobileMenu);
mobileMenuTop.forEach((element)=> element.addEventListener("click", togglesMobileMenu));

function togglesMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productShoppingDetail.classList.add("inactive");
  searchShoppingDetail.classList.add("inactive");
}

shoppingCartIcon.addEventListener("click", togglesCartShoppig);
shoppingCartIcon.addEventListener("click", productsList);
arrowIcon.addEventListener("click", togglesCartShoppig);

function togglesCartShoppig() {
  productShoppingDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  searchShoppingDetail.classList.add("inactive");
  loadInfo();
  amountCount();
  totalPrice();
}

shoppingSearchIcon.addEventListener("click", togglesSearchShoppig);
shoppingSearchIcon.addEventListener("click", productsList);

function togglesSearchShoppig() {
  searchShoppingDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  productShoppingDetail.classList.add("inactive");
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
    productShoppingDetail.classList.remove("inactive");
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
        <p>${product.name}</p>
        <p>${product.color}</p>
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

// products quantity

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

// product search

const searchButton = document.querySelector('.search__button');
searchButton.addEventListener('click', search);

const searchForm = document.querySelector('.search__form');
searchForm.addEventListener('keyup', (e) =>{
  if (e.keyCode === 13) { 
   search();
  }
});

const searchReset = document.querySelector('.search__reset')
searchReset.addEventListener('click', productsList);

function search(){
  
  const productsSearch = productList.filter(product =>  product.name.toLowerCase() == searchForm.value.toLowerCase());
  if(productsSearch.length == 0)
  {
    console.log("No se encuentra");
  }else{
  cardsContainer.innerHTML = ` `;
  for (productSearch of productsSearch) {
    cardsContainer.innerHTML += `
      <div class="product-card">
          <img class="product-image" src=${productSearch.image} alt="imagen ${productSearch.name}">
          <div class="product-info">
            <div>
              <p class="product-name">${productSearch.name}</p>
              <p class="product-name">${productSearch.color}</p>
              <p class="product-price">$ ${productSearch.price},00</p>
            </div>
            <figure>
              <img class="add-shopping-cart" src="../img/add.svg" alt="add shopping cart">
            </figure>
         </div>
       </div>
    `;
  }

}
searchForm.value = ''
}


// SLIDER-----------------------------------------------------------

const slider = document.querySelector(".slider");
const sliderConteiner = document.querySelector("slider__conteiner");
const sliders = [...document.querySelectorAll(".slider__body")];
const arrowNext = document.querySelector("#next");
const arrowBefore = document.querySelector("#before");
const sliderButtonsContainer = document.querySelector('.slider__buttons-containt');

const currentElement = Number(document.querySelector(".slider__body--show").dataset.id);



let interval;

// create buttons slider
for (let i = 0; i < sliders.length; i++) {
  const buttonSlide = document.createElement('button');
  buttonSlide.setAttribute('class', 'button-slide')
  sliderButtonsContainer.appendChild(buttonSlide);
}
const buttonsSlide = [...sliderButtonsContainer.querySelectorAll('.button-slide')];
buttonsSlide[0].classList.add('active');

// arrow buttons
arrowNext.addEventListener("click", () => changePosition(1));
arrowBefore.addEventListener("click", () => changePosition(-1));

arrowNext.addEventListener("click", () => finishInterval);
arrowBefore.addEventListener("click", () => finishInterval);
  
window.addEventListener('load', startInterval);

function startInterval() {
  interval = setInterval(() => {
    changePosition(1)
  }, 5000)
}

function finishInterval() {
  clearInterval(interval);
}


function changePosition(change) {
  clearInterval(interval)
  let value = currentElement;
  value += change;

  if (value == -1 || value == sliders.length) {
    value = (value == -1 ? sliders.length - 1 : 0)
  }

  sliders[currentElement].classList.toggle("slider__body--show");
  buttonsSlide[currentElement].classList.toggle('active');

  sliders[value].classList.toggle("slider__body--show");
  buttonsSlide[value].classList.toggle('active');
  startInterval();
}




