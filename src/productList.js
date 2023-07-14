const cardsContainer = document.querySelector(".cards-container");
window.addEventListener('load', productsList);

const productList = [];
productList.push({
  name: "Shoes",
  color: "Purple/White",
  price: 130,
  image:
    "https://images.unsplash.com/photo-1663292039460-188fe02b5968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
});
productList.push({
  name: "Jersey",
  color: "Yellow/Purple",
  price: 30,
  image:
    "https://images.unsplash.com/photo-1621369894408-e68031702f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  
});
productList.push({
  name: "Jacket",
  color: "Black",
  price: 120,
  image:
    "https://images.unsplash.com/photo-1580171401406-dee43fa52ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=856&q=80",
});
productList.push({
  name: "Cap",
  color: "Blue/Yellow",
  price: 20,
  image:
    "https://images.unsplash.com/photo-1530227826287-f12d70f4ee18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
});
productList.push({
  name: "Jersey",
  color: "White/Purple",
  price: 35,
  image:
    "https://images.unsplash.com/photo-1580089595767-98745d7025c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
});
productList.push({
  name: "Shoes",
  color: "Red",
  price: 150,
  image:
    "https://images.unsplash.com/photo-1675625500524-432cad136b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=846&q=80",
});
productList.push({
  name: "Jersey",
  color: "Black/Yellow",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1602001373634-a123ae173c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
});
productList.push({
  name: "Jersey",
  color: "Purple/Yellow",
  price: 45,
  image:
    "https://images.pexels.com/photos/9504488/pexels-photo-9504488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Shirt",
  color: "Yellow",
  price: 75,
  image:
    "https://images.unsplash.com/photo-1602701691714-7162b221b3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
});
productList.push({
  name: "Jersey",
  color: "White/Red",
  price: 40,
  image:
    "https://images.pexels.com/photos/9943470/pexels-photo-9943470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Shoes",
  color: "Yellow/Red",
  price: 95,
  image:
    "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Jacket",
  color: "Yellow/Purple",
  price: 80,
  image:
    "https://images.unsplash.com/photo-1615916732335-9d320ec7f2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=475&q=80",
});
productList.push({
  name: "Cap",
  color: "Purple/Yellow",
  price: 30,
  image:
    "https://images.pexels.com/photos/17256748/pexels-photo-17256748/free-photo-of-hombre-sentado-deporte-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Shoes",
  color: "White",
  price: 100,
  image:
    "https://images.unsplash.com/photo-1641792670570-158202f62fae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
});
productList.push({
  name: "Cap",
  color: "Grey",
  price: 25,
  image:
    "https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Shirt",
  color: "Purple",
  price: 55,
  image:
    "https://images.unsplash.com/photo-1643702776183-1771fa9ac5f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=462&q=80",
});
productList.push({
  name: "Shoes",
  color: "Orange/Green",
  price: 130,
  image:
    "https://images.unsplash.com/photo-1667863034256-13526b9c44ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
});
productList.push({
  name: "Shirt",
  color: "Yellow",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1530279281203-4c60af01ee58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
});
productList.push({
  name: "Shoes",
  color: "Black",
  price: 120,
  image:
    "https://images.unsplash.com/photo-1643584549066-fc993fc9cb43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
});
productList.push({
  name: "Ball",
  color: "Yellow",
  price: 70,
  image:
    "https://images.unsplash.com/photo-1601046500409-1af2290deeaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
});


function productsList() {
  cardsContainer.innerHTML = ''
  for (product of productList) {
    cardsContainer.innerHTML += `
      <div class="product-card">
          <img class="product-image" src=${product.image} alt="imagen ${product.name}">
          <div class="product-info">
            <div>
              <p class="product-name">${product.name}</p>
              <p class="product-name">${product.color}</p>
              <p class="product-price">$ ${product.price},00</p>
            </div>
            <figure>
              <img class="add-shopping-cart" src="../img/add.svg" alt="add shopping cart">
            </figure>
        </div>
      </div>
    `;
  }
}



