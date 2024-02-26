let getValueProduct = () => {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then((response) => {
      let productList = document.querySelector(".seller-list");
      productList.innerHTML = response.data.content
        .map(function (product) {
          return `<li class="seller-item">
        <div class="seller-media">
        <img class="seller-img" src="${product.image}" alt=""></img>
        <a href="" class="seller-btn">Quick View</a>
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
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
getValueProduct();
