var star4 = document.querySelector(".star4");
var star5 = document.querySelector(".star5");
var popup = document.getElementById("add-popup");
var cancel = document.getElementById("cancel-book");

popup.addEventListener("click", function () {
  star4.style.display = "block";
  star5.style.display = "block";
});
cancel.addEventListener("click", function (event) {
  event.preventDefault();
  star4.style.display = "none";
  star5.style.display = "none";
});

function deleteContent(event) {
  event.target.parentElement.remove();
}

var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescription = document.getElementById("book-description-input");

addBook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${bookTitleInput.value}</h2>
  <h5>${bookAuthorInput}</h5>
  <p>${bookDescription.value}</p>
  <button onclick="deleteContent(event)">Delete</button>`;
  container.append(div);
  star4.style.display = "none";
  star5.style.display = "none";
});
