const images = [
  "images/wallhaven-1q1kv3_1920x1080.png",
  "images/wallhaven-ml91l9_1920x1080.png",
  "images/wallhaven-w5eq57_1920x1080.png"
];

let index = 0;
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
let currentBg = bg1;
let nextBg = bg2;

images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  nextBg.style.backgroundImage = `url('${images[index]}')`;
  nextBg.style.opacity = '1';
  currentBg.style.opacity = '0';
  
  // Swap
  [currentBg, nextBg] = [nextBg, currentBg];
  
  index = (index + 1) % images.length;
}

bg1.style.backgroundImage = `url('${images[0]}')`;
bg1.style.opacity = '1';
setInterval(changeBackground, 5000);