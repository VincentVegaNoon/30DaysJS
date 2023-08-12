const firstNameInput = document.querySelector(".firstName input");
const lastNameInput = document.querySelector(".lastName input");
const emailInput = document.querySelector(".email input");
const passwordInput = document.querySelector(".password input");
const telephoneInput = document.querySelector(".telephone input");
const bioInput = document.querySelector(".bio input");
const btn = document.querySelector("button");
const allPs = document.querySelectorAll("p");
const allnputs = document.querySelectorAll("input");

firstNameInput.addEventListener("input", function () {
  const firstNameRegex = /^[a-zA-Z0-9]{3,16}$/;
  if (firstNameRegex.test(firstNameInput.value)) {
    document.querySelector(".firstName p").style.display = "none";
  } else {
    document.querySelector(".firstName p").style.display = "block";
  }
});
lastNameInput.addEventListener("input", function () {
  const lastNameRegex = /^[a-zA-Z0-9]{3,16}$/;
  if (lastNameRegex.test(lastNameInput.value)) {
    document.querySelector(".lastName p").style.display = "none";
  } else {
    document.querySelector(".lastName p").style.display = "block";
  }
});
passwordInput.addEventListener("input", function () {
  const passwordRegex = /^[\w@\-]{6,20}$/;

  if (passwordRegex.test(passwordInput.value)) {
    document.querySelector(".password p").style.display = "none";
  } else {
    document.querySelector(".password p").style.display = "block";
  }
});
emailInput.addEventListener("input", function () {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(emailInput.value)) {
    document.querySelector(".email p").style.display = "none";
  } else {
    document.querySelector(".email p").style.display = "block";
  }
});
telephoneInput.addEventListener("input", function () {
  const telephoneRegex = /^(?:\d{10}|\d{3}-\d{3}-\d{4})$/;

  if (telephoneRegex.test(telephoneInput.value)) {
    document.querySelector(".telephone p").style.display = "none";
  } else {
    document.querySelector(".telephone p").style.display = "block";
  }
});
bioInput.addEventListener("input", function () {
  const bioRegex = /^[a-z_-]{8,50}$/;

  if (bioRegex.test(bioInput.value)) {
    document.querySelector(".bio p").style.display = "none";
  } else {
    document.querySelector(".bio p").style.display = "block";
  }
});

const checkButton = () => {
  let arr = [];
  allPs.forEach((elem) => {
    if (elem.style.display === "none") {
      arr.push(elem);
    }
    if (arr.length === 6) {
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "black";
    }
  });
};
allnputs.forEach((elem) => {
  elem.addEventListener("input", checkButton);
});
