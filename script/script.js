const tenisDiv = document.getElementById("tenis");



let shoe = [
  {
    path: "img/1.png",
    name: "Air Jordan 1 Mid Dutch Green",
    model: "Tênis Air Jordan",
    price: "R$ 1.199,99",
  },
  {
    path: "img/2.png",
    name: "Air Jordan 1 High Zoom CMFT Tropical Twist",
    model: "Tênis Air Jordan",
    price: "R$ 1.049,00",
  },
  {
    path: "img/3.png",
    name: "Air Jordan 1 Mid Dutch Green",
    model: "Tênis Air Jordan",
    price: "R$ 1.350,00",
  },
  {
    path: "img/4.png",
    name: "Air Jordan 1 Mid GS 'Light SmokeGrey' ",
    model: "Tênis Air Jordan",
    price: "R$ 1.585,00",
  },
  {
    path: "img/5.png",
    name: "Air Jordan 1 Mid SE Bright Citrus",
    model: "Tênis Air Jordan",
    price: "R$ 949,99",
  },
  {
    path: "img/2.png",
    name: "Air Jordan 1 Mid Grey Camo",
    model: "Tênis Air Jordan",
    price: "R$ 999,99",
  },
];

function box() {
  for (let i = 0; i < shoe.length; i++) {
    //construção do box onde está as informações do produto
    const boxTenis = document.createElement("div");
    boxTenis.classList.add("box-tenis");

    //consturção da div que contém a imagem
    const imgTenis = document.createElement("div");
    imgTenis.classList.add("img-tenis");
    var imagem = document.createElement("img");
    imagem.src = shoe[i].path;
    imagem.alt = "Air Jordan";
    imgTenis.appendChild(imagem);

    //construção da div das informações do produto
    const description = document.createElement("div");
    description.classList.add("description");

    const name = document.createElement("p");
    name.classList.add("name-tenis")
    name.textContent = shoe[i].name;
    const model = document.createElement("p");
    model.classList.add("model-tenis")
    model.textContent = shoe[i].model;
    const price = document.createElement("p");
    price.classList.add("price")
    price.textContent = shoe[i].price;

    //adicionar os elementos de texto à div 'description'
    description.appendChild(name);
    description.appendChild(model);
    description.appendChild(price);

    // Adicionar as divs 'imgTenis' e 'description' à div 'boxTenis'
    boxTenis.appendChild(imgTenis);
    boxTenis.appendChild(description);

    // Adicionar a div 'boxTenis' à div com o ID "tenis
    tenisDiv.appendChild(boxTenis); 
  }
}

box(); 

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: false,
});

sr.reveal(".nav-presentation", { delay: 100 });
sr.reveal(".header-presentation", { delay: 200 });
sr.reveal(".main-header-img", { delay: 300 });
sr.reveal(".text-header", { delay: 300 });
sr.reveal(".container-main", { delay: 400 });