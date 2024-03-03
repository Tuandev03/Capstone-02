// import { getProductById } from "./js/detail.js";



// import { getProductById, renderDetailProduct } from "./js/detail.js";

export function getValueProduct() {
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
        <a href="#" id="quick-view" class="seller-btn" ">Quick View</a>
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
      document.querySelectorAll(".seller-btn").forEach((item) => {
        item.addEventListener("click", (event) => {
          event.preventDefault();
          let urlParam = new URLSearchParams(window.location.search);
          let id = urlParam.get("idGiay");
          window.location.href = `./pages/detail.html?idGiay=${id}`;
          console.log(id);
          // renderDetailProduct(result.data.content)
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}
getValueProduct();

// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get("productId");
// };
