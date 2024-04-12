// Function to set up the slider functionality
function setupSlider(wrapper, menuItems, products) {
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      //change the choosen product
      choosenProduct = products[index];

      // Update product details
      displayProductDetails(choosenProduct);
    });
  });
}

// Function to display product details
function displayProductDetails(product) {
  currentProductTitle.textContent = product.title;
  currentProductPrice.textContent = "$" + product.price;
  currentProductImg.src = product.colors[0].img;

  // Assign new colors
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = product.colors[index].code;
  });
}

// Function to set up event listeners
function setupEventListeners() {
  // Event listener for color selection
  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  // Event listener for size selection
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  // Event listener for product button
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });

  // Event listener for close button
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
}

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

//Product data
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
 
];

document.addEventListener("DOMContentLoaded", function () {
  setupSlider(wrapper, menuItems, products);
  setupEventListeners();
});
