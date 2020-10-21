var button = document.getElementById("button");
button.addEventListener("click", changeTitle);

var list = document.getElementById("list");
var contents = list.getElementsByTagName("li");

console.log(contents[0]);

for (let i = 0; i < contents.length; i++) {
    contents[i].addEventListener("")
}

/*
  0: li
  1: li
  2: li
  3: li
  4: li
*/

function changeTitle() {
  alert("Hello, world!");
}
