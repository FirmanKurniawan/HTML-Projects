let img = document.querySelector("#destination");
let shizuoka = document.querySelector("#shizuoka");
let kyoto = document.querySelector("#kyoto");
let naoyama = document.querySelector("#naoyama");

shizuoka.addEventListener("click", () => {
  img.src = "assets/images/shizuoka.jpg";
});

kyoto.addEventListener("click", () => {
  img.src = "assets/images/kyoto.jpg";
});

naoyama.addEventListener("click", () => {
  img.src = "assets/images/naoyama.jpg";
});
