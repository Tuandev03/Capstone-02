// import { getProductById } from "./js/detail.js";

import { getProductById, renderDetailProduct } from "./js/detail.js";

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let getValueProduct = () => {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then((response) => {
      let productList = document.querySelector(".seller-list");
      productList.innerHTML = response.data.content
        .map((product) => {
          return `<li class="seller-item">
        <div class="seller-media">
        <img class="seller-img" src="${product.image}" alt=""></img>
        <a href="#" id="quick-view" class="seller-btn" data-product-id="${product.id}">Quick View</a>
        </div>
            <div class="seller-content">
            <p class="seller-name">${product.name}</p>
            <p class="seller-desc">${product.description}</p>
            </div>
            <ul class="seller-rate">
            <li class="seller-rate-item">
            <div class="">
            <p class="seller-price">$${product.price}</p>
             </div>
            <div class="">
            <i class="fa-regular fa-star seller-icon"></i>
            <i class="fa-regular fa-star seller-icon"></i>
            <i class="fa-regular fa-star seller-icon"></i>
            <i class="fa-regular fa-star seller-icon"></i>
            <i class="fa-regular fa-star seller-icon"></i>
            </div>
            </li>
          </ul>
            </li>
            `;
        })

        .join("");

      // Sự kiện khi click vào nút "Quick View"
      const quickViewButtons = document.querySelectorAll(".seller-btn");
      quickViewButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          const productId = event.target.dataset.productId;
          getProductById(productId);
        });
      });

      renderDetailProduct(product);
      // Hàm hiển thị chi tiết sản phẩm

      // Gọi API lấy danh sách sản phẩm và render khi trang được load
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
getValueProduct();

// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get("productId");
// };
