var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var productContainer = [];

if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayproduct(productContainer);
}

function addproduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    Category: productCategoryInput.value,
    Desc: productDescInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  clearfrom();
  displayproduct(productContainer);
}

function clearfrom() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}

function deleteproduct(deleteindex) {
  productContainer.splice(deleteindex, 1);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayproduct(productContainer);
}

function displayproduct(productContainer) {
  var cartoona = "";
  for (var i = 0; i < productContainer.length; i++) {
    cartoona += `<tr>
<td>${i + 1}</td>
<td>${productContainer[i].name}</td>
<td>${productContainer[i].price}</td>
<td>${productContainer[i].Category}</td>
<td>${productContainer[i].Desc}</td>
<td><button type="button" class="btn btn-warning">update</button></td>
<td><button type="button" onclick="deleteproduct(${i});" class="btn btn-danger">Delet</button></td>
</tr>`;
  }
  document.getElementById("tablebody").innerHTML = cartoona;
}

// function searchProduct(term) {
//     var cartoona = "";
//     for (var i=0;i<productContainer.length;i++)
//     {
//        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true)
//        {
//         cartoona += `<tr>
//         <td>${i + 1}</td>
//         <td>${productContainer[i].name}</td>
//         <td>${productContainer[i].price}</td>
//         <td>${productContainer[i].Category}</td>
//         <td>${productContainer[i].Desc}</td>
//         <td><button type="button" class="btn btn-warning">update</button></td>
//         <td><button type="button" onclick="deleteproduct(${i});" class="btn btn-danger">Delet</button></td>
//         </tr>`
//        }
//     }
// }

function searchProduct(searchKey) {
  var matchedSearch = [];ن
  for (var i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(searchKey.toLowerCase())
    ) {
      matchedSearch.push(productContainer[i]);
    } else {
      console.log("Search not matched");
    }
  }
  displayproduct(matchedSearch);
}
