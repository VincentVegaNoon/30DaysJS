const addPlayerButton = document.querySelector(".addPlayer");
const inputName = document.querySelector(".name");
const inputLastName = document.querySelector(".lastname");
const inputCountry = document.querySelector(".country");
const inputScore = document.querySelector(".score");
const playersSection = document.querySelector(".players");

const times = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  let time = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return time;
};

const PlayerLayout = () => {
  let time = times();
  const CreateElement = () => {
    const section = document.createElement("section");
    section.classList.add("player");
    const div = document.createElement("div");
    div.classList.add("createTime");
    const p = document.createElement("p");
    const pTime = document.createElement("p");
    const pCountry = document.createElement("p");
    const pScore = document.createElement("p");
    const sectionModify = document.createElement("section");
    const pTrashcan = document.createElement("p");
    const iTrash = document.createElement("i");
    const pPlus = document.createElement("p");
    const pMinus = document.createElement("p");
    pPlus.classList.add("plus");
    pMinus.classList.add("minus");
    pScore.classList.add("score");
    pPlus.textContent = "+5";
    pMinus.textContent = "-5";
    iTrash.classList.add("fa-solid", "fa-trash-can");
    sectionModify.classList.add("modify");
    p.textContent = `${inputName.value} ${inputLastName.value}`;
    pTime.textContent = time;
    pCountry.textContent = inputCountry.value;
    pScore.textContent = inputScore.value;
    playersSection.appendChild(section);
    section.appendChild(div);
    div.appendChild(p);
    div.appendChild(pTime);
    section.appendChild(pCountry);
    section.appendChild(pScore);
    section.appendChild(sectionModify);
    sectionModify.appendChild(pTrashcan);
    pTrashcan.appendChild(iTrash);
    sectionModify.appendChild(pPlus);
    sectionModify.appendChild(pMinus);

    function removePlayer(event) {
      const playerElement = event.target.closest(".player");
      if (playerElement) {
        playerElement.remove();
      }
    }
    pTrashcan.addEventListener("click", removePlayer);

    function addScore(event) {
      const playerElement = event.target.closest(".player");
      if (playerElement) {
        const scoreElement = playerElement.querySelector(".score");
        if (scoreElement) {
          const currentScore = parseInt(scoreElement.textContent);
          scoreElement.textContent = (currentScore + 5).toString();
        }
      }
      filterPlayersByScore();
    }
    pPlus.addEventListener("click", addScore);

    function minusScore(event) {
      const playerElement = event.target.closest(".player");
      if (playerElement) {
        const scoreElement = playerElement.querySelector(".score");
        if (scoreElement) {
          const currentScore = parseInt(scoreElement.textContent);
          scoreElement.textContent = (currentScore - 5).toString();
        }
      }
      filterPlayersByScore();
    }
    pMinus.addEventListener("click", minusScore);
  };
  CreateElement();
};

function filterPlayersByScore() {
  const players = Array.from(document.querySelectorAll(".player"));
  const sortedPlayers = players.sort((a, b) => {
    const scoreA = parseInt(a.querySelector(".score").textContent);
    const scoreB = parseInt(b.querySelector(".score").textContent);
    return scoreB - scoreA;
  });

  const fragment = document.createDocumentFragment();
  sortedPlayers.forEach((player) => {
    fragment.appendChild(player);
  });
  playersSection.innerHTML = "";
  playersSection.appendChild(fragment);
}
addPlayerButton.addEventListener("click", () => {
  PlayerLayout();
  filterPlayersByScore();
});
