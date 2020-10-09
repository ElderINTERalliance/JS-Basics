var button = document.getElementById("button");
button.addEventListener("click", changeTitle);

var list = document
  .getElementById("list")
  .getElementsByTagName("li")

// for (let i = 0; i < list.length; i++) {
//   list[i];
// }
console.log(list);
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", changeBullet)
}

function changeBullet(params) {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("active")
  }
  this.classList.add("active")
}

function changeTitle() {}
