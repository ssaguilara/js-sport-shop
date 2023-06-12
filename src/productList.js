const cardsContainer = document.querySelector(".cards-container");

const productList = [];
productList.push({
  name: "Yellow/Purple",
  price: 30,
  image:
    "https://images.unsplash.com/photo-1621369894408-e68031702f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
});
productList.push({
  name: "White/Purple",
  price: 35,
  image:
    "https://images.unsplash.com/photo-1580089595767-98745d7025c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
});
productList.push({
  name: "Black/Yellow",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1602001373634-a123ae173c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
});
productList.push({
  name: "Purple/Yellow",
  price: 45,
  image:
    "https://images.pexels.com/photos/9504488/pexels-photo-9504488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "White/Red",
  price: 40,
  image:
    "https://images.pexels.com/photos/9943470/pexels-photo-9943470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

//Metodo #1
// for (product of productList) {
//   const productCard = document.createElement("div");
//   productCard.classList.add("product-card");

//   const productImg = document.createElement("img");
//   productImg.setAttribute("src", product.image);
//   productImg.setAttribute("alt", product.name);

//   const productInfo = document.createElement("div");
//   productInfo.classList.add("product-info");

//   const productInfoDiv = document.createElement("div");

//   const productName = document.createElement("p");
//   productName.innerText = product.name;

//   const productPrice = document.createElement("p");
//   productPrice.innerText = ` $ ${product.price},00`;

//   productInfoDiv.appendChild(productPrice);
//   productInfoDiv.appendChild(productName);

//   const productInfoFigure = document.createElement("figure");
//   const productImgCart = document.createElement("img");
//   productImgCart.setAttribute("class", "add-shopping-cart");
//   productImgCart.setAttribute("src", "../img/add.svg");
//   productImgCart.setAttribute("alt", "../img/add.svg");


//   productInfoFigure.appendChild(productImgCart);

//   productInfo.append(productInfoDiv, productInfoFigure);

//   productCard.append(productImg, productInfo);

//   cardsContainer.appendChild(productCard);
// }


//Metodo #2
for (product of productList) {
  cardsContainer.innerHTML += `
    <div class="product-card">
        <img class="product-image" src=${product.image} alt="imagen ${product.name}">
        <div class="product-info">
          <div>
            <p class="product-name">${product.name}</p>
            <p class="product-price">$ ${product.price},00</p>
          </div>
          <figure>
            <img class="add-shopping-cart" src="../img/add.svg" alt="add shopping cart">
          </figure>
       </div>
     </div>
  `;
}




