var button = document.getElementById("button");
var list = document.getElementById("list");
var items = list.getElementsByTagName("li");
var title = document.getElementById("title-1");

var counter = 0;

/*

// Initial For Loop

for (let i = 0; i < items.length; i++) {
  // make this a seperate function
  items[i].addEventListener("click", changeListItem);
  // Make sure there are no parenthesis in function name
}

*/

list.addEventListener("click", deleteListItem);

function highlightListItem(e) {
  if (e.target.nodeName == "LI") {
    title.innerHTML = e.target.innerHTML;
    siblings = e.target.parentNode.children;
    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
}

function deleteListItem(e) {
  if (e.target.nodeName == "LI") {
    e.target.remove();
  }
}

/*
//Initial changeListItem
function changeListItem() {
  title.innerHTML = this.innerHTML;
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
  this.classList.add("active");
}
*/

button.addEventListener("click", addTask);
function increaseList() {
  list.innerHTML += `<li> Item ${counter}</li>`;
  counter++;
}
function addTask() {
  let task = prompt("What do you want to add?");
  list.innerHTML += `<li> ${task}</li>`;
}
