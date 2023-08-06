const input = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("button");
const planet = document.querySelector(".planet-image");
const description = document.querySelector(".flex-item.description");
const main = document.querySelector("main");

const arrOfGravity = {
  Mercury: 0.38,
  Venus: 0.91,
  Moon: 0.166,
  Earth: 1,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
  Pluto: 0.06,
};
const calculateWeight = () => {
  if (input.value > 0 && !(select.value === "none")) {
    main.style.display = "block";
    document.querySelector(".flex-container").style.justifyContent =
      "space-around";
    const selectedPlanet = select.value;
    planet.src = `./images/${select.value.toLowerCase()}.png`;
    description.textContent = `The weight of the object on ${select.value}`;
    const span = document.createElement("span");
    span.textContent = `${(input.value * arrOfGravity[selectedPlanet]).toFixed(
      2
    )} Kg`;
    span.classList.add("spanMass");
    description.appendChild(span);
  } else if (!(input.value > 0)) {
    planet.src = "";
    document.querySelector(".flex-container").style.justifyContent = "center";
    main.style.display = "block";
    description.textContent = `Mass is required`;
  } else if (select.value === "none") {
    planet.src = "";
    document.querySelector(".flex-container").style.justifyContent = "center";
    main.style.display = "block";
    description.textContent = `Select Planet`;
  }
};

btn.addEventListener("click", calculateWeight);
