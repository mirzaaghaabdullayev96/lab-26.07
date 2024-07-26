let selectOptions = document.getElementById("select-products");
let resultDiv = document.getElementById("result-div");
let input = document.getElementById("my-input");

const UrlCategories = "https://fakestoreapi.com/products/categories";
const UrlProducts = "https://fakestoreapi.com/products";

fetch(UrlCategories)
  .then((res) => res.json())
  .then((categories) => {
    categories.forEach((element) => {
      selectOptions.innerHTML += `<option value="${element}">${element}</option>`;
    });
  });

selectOptions.addEventListener("change", function () {
  resultDiv.innerHTML = "";

  fetch("https://fakestoreapi.com/products/category/" + this.value)
    .then((result) => result.json())
    .then((dataByCategory) => {
      dataByCategory.forEach((myElement) => {
        resultDiv.innerHTML += `
                <div style="display:flex; align-items:center; padding:5px">
                <img src="${myElement.image}" alt="" style="height: 60px; width: 50px; margin-right:5px;"> <span> ${myElement.title} - ${myElement.price}</span>
                </div>`;
      });
    });
});

function getSelecetValue() {
  return selectOptions.value;
}

input.addEventListener("change", function () {
  resultDiv.innerHTML = "";

  fetch("https://fakestoreapi.com/products/category/" + getSelecetValue())
    .then((newresult) => newresult.json())
    .then((newdataByCategory) => {
        resultDiv.innerHTML="";
      newdataByCategory.forEach((newmyElement) => {
        if (newmyElement.title.includes(input.value)) {
          resultDiv.innerHTML += `
            <div style="display:flex; align-items:center; padding:5px">
            <img src="${newmyElement.image}" alt="" style="height: 60px; width: 50px; margin-right:5px;"> <span> ${newmyElement.title} - ${newmyElement.price}</span>
            </div>`;
        }
      });
    });
});
