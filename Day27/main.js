const icon = document.querySelector(".icon");
const title = document.querySelector(".titles p");
const tech = asabenehChallenges2020.challenges[0].topics;
const topic = document.querySelector(".topics");

const titlesChange = () => {
  const titles = asabenehChallenges2020.author.titles;
  const topics = asabenehChallenges2020.challenges[0].topics;
  const animationDuration = 2000;
  let titleIndex = 0;
  let topicIndex = 0;

  const changeContent = () => {
    title.textContent = titles[titleIndex].join(" ");
    title.style.animation = `example ${animationDuration / 1000}s`;

    topic.textContent = topics[topicIndex];
    topic.style.animation = `titleAppear ${animationDuration / 1000}s`;
    changeColor();

    title.addEventListener("animationend", () => {
      title.style.animation = "none";
    });

    topic.addEventListener("animationend", () => {
      topic.style.animation = "none";
    });

    titleIndex = (titleIndex + 1) % titles.length;
    topicIndex = (topicIndex + 1) % topics.length;
    console.log(titleIndex, topicIndex);
    setTimeout(() => {
      changeContent();
    }, animationDuration);
  };

  changeContent();
};

const changeColor = () => {
  let arrColor = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256);
    arrColor.push(color);
  }
  topic.style.color = `rgb(${arrColor[0]},${arrColor[1]},${arrColor[2]})`;
  arrColor = [];
};
titlesChange();
