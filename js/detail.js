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
      console.log(err.status);
    });
}
getProductById(10);

function renderDetailProduct(product) {
  //   var arrCategories = product.categories;
  //   //   console.log("cate", product.categories);
  //   for (var i = 0; i < arrCategories.length; i++) {
  //     var category = arrCategories[i].category;
  //     console.log(i, category);
  //   }
  var contentCategory = getCategories(product.categories);
  var sizeShoes = renderSizeShoes(product.size);
  var relatedProduct = renderRelatedProduct(product.relatedProducts);
  //   console.log(contentCategory);
  //   var content = `
  //   <div class="detail_left">
  //   <div class="product_img">
  //     <img
  //       src="${product.image}"
  //       alt="productDetail_img"
  //     />
  //   </div>
  // </div>
  // <div class="detail_right">
  //   <div class="categories">
  //   <a>${contentCategory}</a>
  //   </div>
  //   <div class="product_title">
  //     <h1>${product.name}</h1>
  //   </div>
  //   <p class="product_price">
  //     <del>$${product.price + 50}.00</del>
  //     <span>$${product.price}.00</span>
  //   </p>
  //   <span class="shipping_text"> & Free Shipping</span>
  //   <div class="product_description">${product.description}</div>
  //   <div class="product_categories">
  //     <span class="posted_in">
  //     Categories:
  //     </span>
  //   </div>
  // </div>
  //   `;
  document.getElementById("product_img").src = product.image;
  document.querySelector(".categories a").innerHTML = contentCategory;

  document.querySelector(".product_title #product_name").innerHTML =
    product.name;
  document.querySelector("#old_price").innerHTML = "$" + (product.price + 50);
  document.querySelector("#new_price").innerHTML = "$" + product.price;
  document.querySelector(".product_description").innerHTML =
    product.description;

  document.querySelector(".shoes_sizes").innerHTML = sizeShoes;
  document.querySelector(".related_product_list").innerHTML = relatedProduct;
}
function getCategories(arr) {
  var arrCate = [];
  var content = "";
  var arrCategories = arr;
  //   console.log("cate", product.categories);
  for (var i = 0; i < arrCategories.length; i++) {
    var category = arrCategories[i].category;
    arrCate.push(category);
    arrCate.join(", ");
    console.log(arrCate);
    // console.log(i, category);
    content += `<a href="">${category}, </a>`;
    // console.log(content);
  }
  //   document.querySelector(".categories").innerHTML = content;
  return content;
}
function renderSizeShoes(arr) {
  var content = "";
  var arrSize = arr;
  //   console.log("cate", product.categories);
  for (var i = 0; i < arrSize.length; i++) {
    var size = arrSize[i];
    console.log(size);
    // console.log(i, category);
    content += `<a href="" id='size_shoes'>${size} </a>`;
    // console.log(content);
  }
  return content;
}
function renderRelatedProduct(arr) {
  var content = "";
  for (let i = 0; i < arr.length; i++) {
    var relatedProduct = arr[i];
    content += `
    <li class="related_product_item">
    <span class="sale_circle">Sale!</span>
    <div class="related_product_media">
      <a href="" class="related_link">
        <img
          class="related_product_img"
          src="${relatedProduct.image}"
          alt=""
        />
      </a>
      <a href="" class="quick_view_btn">Quick View</a>
    </div>
    <div class="related_product_info">
      <p class="product_name">${relatedProduct.name}</p>
      <div class="price">
        <del class="old_price product_price">${relatedProduct.price + 50}</del>
        <span class="product_price">${relatedProduct.price}</span>
      </div>
    </div>
    <ul class="related_product_rate">
      <li class="related_product_rate-item">
        <div class="rating_star">
          <i class="fa-regular fa-star related_product_icon"></i>
          <i class="fa-regular fa-star related_product_icon"></i>
          <i class="fa-regular fa-star related_product_icon"></i>
          <i class="fa-regular fa-star related_product_icon"></i>
          <i class="fa-regular fa-star related_product_icon"></i>
        </div>
      </li>
    </ul>
  </li>`;
  }
  return content;
}
// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get("productId");
// };
