const container = document.querySelector(".container");
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const createDivs = () => {
  for (let i = 0; i <= 101; i++) {
    let div = document.createElement("div");
    div.textContent = `${i}`;
    if (isPrime(i)) {
      div.style.backgroundColor = "#E87574";
    } else if (i % 2 === 0) {
      div.style.backgroundColor = "#FCDA3A";
    } else {
      div.style.backgroundColor = "#21BF73";
    }

    container.appendChild(div);
  }
};

createDivs();
