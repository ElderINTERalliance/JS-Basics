var button = document.getElementById("button");
var list = document.getElementById("list")
var items = list.getElementsByTagName("li");
var title = document.getElementById("title-1");

var counter = 0

for (let i = 0; i < items.length; i++) {
  // make this a seperate function
  items[i].addEventListener("click", changeListItem);
  // Make sure there are no parenthesis in function name
}

function changeListItem() {
  title.innerHTML = this.innerHTML;
  for (let i = 0; i < items.length; i++) {
   items[i].classList.remove("active")
  }
  this.classList.add("active")
}

button.addEventListener("click", increaseList);
function increaseList() {
  list.innerHTML += `<li> Item ${counter}</li>`
  counter++;
}
