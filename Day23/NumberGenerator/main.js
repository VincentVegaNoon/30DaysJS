const btn = document.querySelector("button");
const input = document.querySelector("input");
const sectionNumbers = document.querySelector(".numberSection");

const createNumbers = () => {
  sectionNumbers.innerHTML = "";

  for (let i = 0; i < input.value; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    sectionNumbers.appendChild(div);
  }
  const divs = [...document.querySelectorAll("div")];
  console.log(divs);
  numbersColors(divs);
};

const numbersColors = (divs) => {
  for (i = 0; i < divs.length; i++) {
    if (isPrime(i)) {
      divs[i].style.backgroundColor = "#FCDA3A";
    } else if (i % 2) {
      divs[i].style.backgroundColor = "#FD5E53";
    } else if (!(i % 2)) {
      divs[i].style.backgroundColor = "#21BF73";
    }
  }
};
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

btn.addEventListener("click", createNumbers);
