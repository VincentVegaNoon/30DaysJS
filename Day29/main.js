const h1Elements = document.querySelectorAll("h1");
const section = document.querySelector("section");

const letterColor = (element) => {
  const text = element.textContent;
  let coloredText = "";
  for (let j = 0; j < text.length; j++) {
    let arrColor = [];
    for (let i = 0; i < 3; i++) {
      let color = Math.floor(Math.random() * 256);
      arrColor.push(color);
    }
    coloredText += `<span style="color: rgb(${arrColor[0]},${arrColor[1]},${arrColor[2]})">${text[j]}</span>`;
    arrColor = [];
  }
  element.innerHTML = coloredText;
};

const titlesChange = () => {
  const fonts = ["Verdana", "Lucida Sans", "Trebuchet MS", "Cambria"];
  const bgc = ["red", "blue", "gray", "lightyellow"];
  const animationDuration = 3000;
  let fontsIndex = 0;
  let bgcIndex = 0;

  const changeContent = () => {
    section.style.fontFamily = fonts[fontsIndex];
    section.style.backgroundColor = bgc[bgcIndex];
    h1Elements.forEach((h1Element) => {
      letterColor(h1Element);
      h1Element.style.animation = "example 3s infinite";
    });

    fontsIndex = (fontsIndex + 1) % fonts.length;
    bgcIndex = (bgcIndex + 1) % bgc.length;

    setTimeout(() => {
      changeContent();
    }, animationDuration);
  };

  changeContent();
};
titlesChange();
