const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
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

const createli = () => {
  for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    if (asabenehChallenges2020.challenges[i].githubUrl.length > 1) {
      a.href = asabenehChallenges2020.challenges[i].githubUrl;
      a.textContent = asabenehChallenges2020.challenges[i].name;
    } else {
      li.textContent = asabenehChallenges2020.challenges[i].name;
    }
    const span = document.createElement("span");
    span.textContent = asabenehChallenges2020.challenges[i].status;
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = asabenehChallenges2020.challenges[i].topics[0];
    if (asabenehChallenges2020.challenges[i].status === "Done") {
      li.style.backgroundColor = "#21BF73";
    } else if (asabenehChallenges2020.challenges[i].status === "Ongoing") {
      li.style.backgroundColor = "#FCDA3A";
    } else {
      li.style.backgroundColor = "#FD5E53";
    }

    ul.appendChild(li);
    li.appendChild(a);
    li.appendChild(details);
    details.appendChild(summary);
    for (
      let j = 0;
      j < asabenehChallenges2020.challenges[i].topics.length;
      j++
    ) {
      const pElement = document.createElement("p");
      pElement.textContent = asabenehChallenges2020.challenges[i].topics[j];
      details.appendChild(pElement);
    }
    li.appendChild(span);
  }
};
createli();

const lilist = [...document.querySelectorAll("li")];

const SectionOne = () => {
  const sectionFirst = document.createElement("section");
  sectionFirst.classList.add("sectionOne");
  const h3 = document.createElement("h3");
  h3.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
  const divFora = document.createElement("div");
  divFora.classList.add("container-awesome");
  const bio = document.createElement("p");
  bio.classList.add("bio");
  bio.textContent = asabenehChallenges2020.author.bio;
  wrapper.appendChild(sectionFirst);
  sectionFirst.appendChild(h3);
  sectionFirst.appendChild(divFora);
  sectionFirst.appendChild(bio);

  for (
    let i = 0;
    i < asabenehChallenges2020.author.socialLinks.length - 1;
    i++
  ) {
    const link = document.createElement("a");
    link.href = asabenehChallenges2020.author.socialLinks[i].url;
    const icon = document.createElement("i");
    icon.className =
      asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon;
    link.appendChild(icon);
    divFora.appendChild(link);
  }
};
SectionOne();
const SectionTwo = () => {
  const sectionTwo = document.createElement("section");
  sectionTwo.classList.add("sectionTwo");
  const titlesDiv = document.createElement("div");
  titlesDiv.classList.add("titlesDiv");
  titlesDiv.textContent = "Titles";
  const titlesSkills = document.createElement("div");
  titlesSkills.classList.add("titlesSkills");
  titlesSkills.textContent = "Skills";
  const titlesQualifications = document.createElement("div");
  titlesQualifications.classList.add("titlesQualifications");
  titlesQualifications.textContent = "Qualifications";
  wrapper.appendChild(sectionTwo);

  for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
    const p = document.createElement("p");
    p.textContent = `${asabenehChallenges2020.author.titles[i][0]} ${asabenehChallenges2020.author.titles[i][1]}`;
    titlesDiv.appendChild(p);
  }
  sectionTwo.appendChild(titlesDiv);
  for (let i = 0; i < asabenehChallenges2020.author.skills.length; i++) {
    const p = document.createElement("p");
    p.textContent = `✅ ${asabenehChallenges2020.author.skills[i]}`;
    titlesSkills.appendChild(p);
  }
  sectionTwo.appendChild(titlesSkills);
  for (
    let i = 0;
    i < asabenehChallenges2020.author.qualifications.length;
    i++
  ) {
    const p = document.createElement("p");
    p.textContent = `📜 ${asabenehChallenges2020.author.qualifications[i]}`;
    titlesQualifications.appendChild(p);
  }
  sectionTwo.appendChild(titlesQualifications);
};
SectionTwo();

const SectionThree = () => {
  const sectionThree = document.createElement("section");
  sectionThree.classList.add("sectionThree");
  const keywordsDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = "Keywords";
  for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
    let randomColor = [];
    for (let i = 0; i < 3; i++) {
      let color = Math.floor(Math.random() * 255);
      randomColor.push(color);
    }
    const p = document.createElement("p");
    p.textContent = `# ${asabenehChallenges2020.keywords[i]}`;
    p.style.backgroundColor = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
    keywordsDiv.appendChild(p);
  }
  wrapper.appendChild(sectionThree);
  sectionThree.appendChild(h3);
  sectionThree.appendChild(keywordsDiv);
};
SectionThree();
