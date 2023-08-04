const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const lilist = [...document.querySelectorAll("li")];
const textContent = h1.textContent;
const lastFourCharacters = textContent.slice(-4);
const newHTML = textContent.replace(
  lastFourCharacters,
  `<span class="last-four-color">${lastFourCharacters}</span>`
);
h1.innerHTML = newHTML;
const h1Element = document.querySelector(".last-four-color");
h1Element.style.fontSize = "48px";

h2.style.textDecoration = "underline";
h2.style.fontWeight = "200";
const changeColorOfh1 = () => {
  let randomColor = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 255);
    randomColor.push(color);
  }
  h1Element.style.color = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
};
setInterval(changeColorOfh1, 1000);

const newDiv = () => {
  const div = document.createElement("div");
  div.textContent = "";
  div.classList.add("time");
  wrapper.insertBefore(div, wrapper.children[2]);
};
newDiv();

const timeFunc = () => {
  const time = document.querySelector(".time");
  const now = new Date();
  const year =
    now.getFullYear() < 10 ? "0" + now.getFullYear() : now.getFullYear();
  const month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  time.textContent = `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
  let randomColor = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 255);
    randomColor.push(color);
  }

  time.style.backgroundColor = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
};
setInterval(timeFunc, 1000);

const chalanges = () => {
  for (i = 0; i < lilist.length; i++) {
    lilist[i].style.listStyle = "none";
    if (lilist[i] === lilist[0]) {
      lilist[i].style.backgroundColor = "#21BF73";
    } else if (lilist[i] === lilist[1]) {
      lilist[i].style.backgroundColor = "#FCDA3A";
    } else {
      lilist[i].style.backgroundColor = "#FD5E53";
    }
  }
};
chalanges();
