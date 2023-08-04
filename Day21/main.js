//1 Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
document.querySelector("p").addEventListener("click", function () {
  console.log("ok");
});
const arr = Array.from(document.getElementsByTagName("p"));
arr.forEach((element) => {
  element.addEventListener("click", function () {
    console.log("ok2");
  });
});
//2 Get each of the the paragraph using document.querySelector('#id') and by their id
console.log(document.getElementById("one"));
console.log(document.getElementById("two"));
console.log(document.getElementById("three"));
console.log(document.getElementById("four"));
//3 Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
console.log(document.querySelectorAll("p"));
//4 Loop through the nodeList and get the text content of each paragraph
const arrOfP = Array.from(document.querySelectorAll("p"));
arrOfP.forEach((elem) => {
  elem.addEventListener("click", function () {
    console.log("dziala");
  });
});
//5 Set a text content to paragraph the fourth paragraph,Fourth Paragraph
for (let i = 0; i < arrOfP.length; i++) {
  if (arrOfP[i] === arrOfP[3]) {
    arrOfP[i].textContent = "Fourth Paragraph";
  }
}
//6 Set id and class attribute for all the paragraphs using different attribute setting methods
for (let i = 0; i < arrOfP.length; i++) {
  arrOfP[i].id = `${i + 1}title`;
}
for (let i = 0; i < arrOfP.length; i++) {
  arrOfP[i].setAttribute("class", "title");
}
for (let i = 0; i < arrOfP.length; i++) {
  arrOfP[i].setAttribute("id", `${i + 1}title`);
}
//Exercise: Level 2
//1 Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
document.getElementById("1title").style.color = "red";
document.getElementById("2title").style.backgroundColor = "orange";
document.getElementById("3title").style.border = "2px solid black";
document.getElementById("4title").style.fontSize = "26px";
//2 Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (let i = 0; i < arrOfP.length; i++) {
  if (i % 2) {
    arrOfP[i].style.color = "red";
  } else {
    arrOfP[i].style.color = "green";
  }
}
//3 Set text content, id and class to each paragraph
arrOfP.forEach((elem, index) => {
  elem.textContent = `${index + 1}`;
});

//Exercise: Level 3
