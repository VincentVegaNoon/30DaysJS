const divCode = document.querySelector(".code");
const h1 = document.querySelector("h1");

const keyPressed = (e) => {
  console.log(e);
  h1.textContent = `You pressed `;
  const span = document.createElement("span");
  span.textContent = e.key;
  h1.appendChild(span);

  divCode.style.display = "block";
  divCode.textContent = e.keyCode;
};

document.body.addEventListener("keyup", keyPressed);
