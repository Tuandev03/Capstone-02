function getAllProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then((result) => {
      console.log(result.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
// getAllProduct();

function getProductById(id) {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });
  promise
    .then((result) => {
      console.log(result.data.content);
      renderDetailProduct(result.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
getProductById(1);

function renderDetailProduct(product) {
  var categories = "";
  //   console.log("cate", arrCategories);
  for (var i = 0; i < product.length; i++) {
    var category = product[i].categories;
    console.log(category);
    categories += `
        <a href="">${category.category}</a>
        `;
  }
  console.log(categories);
  var content = `
  <div class="detail_left">
  <div class="product_img">
    <img
      src="${product.image}"
      alt="productDetail_img"
    />
  </div>
</div>
<div class="detail_right">
  <div class="categories">
  <a>ABC</a>
  </div>
  <div class="product_title">
    <h1>${product.name}</h1>
  </div>
  <p class="product_price">
    <del>$${product.price + 50}.00</del>
    <span>$${product.price}.00</span>
  </p>
  <span class="shipping_text"> & Free Shipping</span>
  <div class="product_description">${product.description}</div>
  <div class="product_categories">
    <span class="posted_in">
    Categories: 
    </span>
  </div>
</div>
  `;
  document.querySelector(".detail_content").innerHTML = content;
}
// function getCategories(arr) {
//   //   var arrCategories = arr.category;
//   var content = "";
//   //   console.log("cate", arrCategories);
//   for (var i = 0; i < arr.length; i++) {
//     var category = arr[i];
//     // console.log(category);
//     content += `
//       <a href="">${category.category}</a>
//       `;
//   }
//   document.querySelector(".categories").innerHTML = content;
// }

// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get("productId");
// };
