function getAllProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
}

// getAllProduct();
// export async function hienThiChiTietGiay(id) {
//   try {
//     let result = await axios({
//       url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
//       method: "GET",
//     });
//     console.log(result.data.content);

//     renderDetailProduct(result.data.content);
//   } catch (error) {
//     console.log(error);
//   }
// }
// hienThiChiTietGiay(10);
// export function getProductById(id) {
//   var promise = axios({
//     url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
//     method: "GET",
//   });
//   promise
//   .then((result) => {
//       let url = new URLSearchParams(window.location.search);
//       let id = url.get("id");

//       // console.log(id);
//     })
//     .catch((err) => {
//       console.log(err.status);
//     });
// }
// getProductById(11);

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  getProductDetail(productId);
});
async function getProductDetail(productId) {
  try {
    let result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
      method: "GET",
    });
    // Render thông tin chi tiết sản phẩm lên trang
    renderDetailProduct(result.data.content);
  } catch (error) {
    console.log(error);
  }
}
function renderDetailProduct(product) {
  var contentCategory = getCategories(product.categories);
  var sizeShoes = renderSizeShoes(product.size);
  var relatedProduct = renderRelatedProduct(product.relatedProducts);

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
  var arrCate = "";
  var content = "";
  var arrCategories = arr;
  //   console.log("cate", product.categories);
  for (var i = 0; i < arrCategories.length; i++) {
    var category = arrCategories[i].category;
    // arrCate.push(category);
    arrCate = arrCategories[i].category;
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
    // console.log(size);
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
        <del class="old_price product_price">$${relatedProduct.price + 50}</del>
        <span class="product_price">$${relatedProduct.price}</span>
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
    </div>
    
  </li>`;
  }
  return content;
}
// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get("productId");
// };
