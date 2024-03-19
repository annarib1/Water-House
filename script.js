

let display = document.querySelector(".display")
let displayImage = document.querySelector(".displayImage");
let displayBrand = document.querySelector(".displayBrand");
let displayCapasity = document.querySelector(".displaySize");
let displayLink = document.querySelector(".displayLink");
let button = document.querySelector("button");

let waterBottle1 = {
  image:
    "https://owalalife.com/cdn/shop/products/Neo_Sage_24oz_SC-4000x4000-c38c18a_1200x1200.png?v=1694543484",
  Brand: "Owala",
  Capasity: "32oz",
  Link: "https://owalalife.com/products/freesip?variant=44898561720479",
};
let waterBottle2 = {
  image:
    "https://www.hydroflask.com/media/catalog/product/cache/0896d24226ba929ed2cdc43dc64054aa/w/3/w32bts-cascade-straighton.jpg",
  Brand: "HydroFlask",
  Capasity: "32oz",
  Link: "https://earthhero.com/cdn/shop/products/32oz_Lupine_4fb92751-2e15-46d1-8d68-3ba50d7ffe6e.jpg?v=1699021066",
};
let waterBottle3 = {
  image:
    "https://www.stanley1913.com/cdn/shop/files/B2B_Web_PNG-TheQuencherH2.OFlowStateTumbler40OZ-Lilac-Front-1.png?v=1707843090",
  Brand: "Stanly",
  Capasity: "40oz",
  Link: "https://www.stanley1913.com/products/adventure-quencher-travel-tumbler-40-oz",
};

let bottles = [waterBottle1, waterBottle2, waterBottle3];

//Click Event

function addWaterInfo() {
  let imageInput = document.querySelector(".image");
let brandInput = document.querySelector(".brand");
let capasityInput = document.querySelector(".size");
let linkInput = document.querySelector(".buy");


  let userInput = {
    image: imageInput.value,
    Brand: brandInput.value,
    Capasity: capasityInput.value,
    Link: linkInput.value,
  };
  bottles.push(userInput);
  console.log(bottles);
};
function emptyDisplay() {
  display.innerHTML= "";
  
}
function displayWaterInfo() {
  bottles.forEach(function (drinks) {
    display.insertAdjacentHTML("beforeend",`<div class ="displayWater"> <img src="${drinks.image}"><div> <p>${drinks.Brand}</p> <p>${drinks.Capasity}</p><p><a href=${drinks.Link}>Buy Here</a></p></div> </div>`);
  });
}





button.onclick = function () {
 emptyDisplay();
  addWaterInfo();
  displayWaterInfo();
};
displayWaterInfo();
