// 1. DOM Элементүүдийг сонгох
const menuGrid = document.getElementById("menuGrid");
const allBtn = document.getElementById("allBtn");
const ramenBtn = document.getElementById("ramenBtn");
const appetizersBtn = document.getElementById("appetizersBtn");
const drinksBtn = document.getElementById("drinksBtn");

//Event Listeners
allBtn.addEventListener("click", showAll);
ramenBtn.addEventListener("click", showRamen);
appetizersBtn.addEventListener("click", showAppetizers);
drinksBtn.addEventListener("click", showDrinks);
window.addEventListener("DOMContentLoaded", showAll);

//Functions
function renderMenu(list) {
  let htmlContent = "";

  list.forEach((item) => {
    htmlContent += `
      <div class="menuCard">
        <div class="ramenImgs" style="background-image: ${item.img}"></div>
        <p class="ramenName">${item.name}</p>
        <p class="ramenTitle">${item.title}</p>
        <button class="priceBtn button-86">${item.price}</button>
      </div>
    `;
  });

  menuGrid.innerHTML = htmlContent;
}

function showAll() {
  const allItems = [
    ...menuData.ramen,
    ...menuData.appetizers,
    ...menuData.drinks,
  ];
  renderMenu(allItems);
}
function showRamen() {
  renderMenu(menuData.ramen);
}
function showAppetizers() {
  renderMenu(menuData.appetizers);
}
function showDrinks() {
  renderMenu(menuData.drinks);
}

// Data
const menuData = {
  ramen: [
    {
      img: "url(./images/SHOYU_SLICED_PORK.avif)",
      name: "SHOYU SLICED PORK",
      title:
        "Thick sliced pork, half egg, bean sprouts, green onions, shoyu tonkotsu broth",
      price: "15.99",
    },
    {
      img: "url(./images/TOM_YUM_STEAK.avif)",
      name: "TOM YUM STEAK",
      title:
        "AAA Striploin, corn, bean sprouts, green onions, tom yum tonkotsu broth",
      price: "15.99",
    },
    {
      img: "url(./images/BLACK_GARLIC_FILET_MIGNON.avif)",
      name: "BLACK GARLIC FILET MIGNON",
      title:
        "Wok-fired beef tenderloin, half egg, bean sprouts, green onions, black garlic tonkotsu broth",
      price: "15.99",
    },
    {
      img: "url(./images/SPICY_CHICKEN.avif)",
      name: "SPICY_CHICKEN",
      title:
        "Grilled chicken, half egg, bean sprouts, green onions, spicy mala tonkotsu broth",
      price: "15.99",
    },
    {
      img: "url(./images/SPICY_BEEF.avif)",
      name: "SPICY BEEF",
      title:
        "Seasoned beef, half egg, bean sprouts, green onions, spicy mala tonkotsu broth",
      price: "15.99",
    },
    {
      img: "url(./images/KARAAGE_ORIGINAL.avif)",
      name: "KARAAGE ORIGINAL",
      title:
        "Japanese fried chicken, half egg, bean sprouts, green onions, original tonkotsu broth",
      price: "15.99",
    },
  ],
  appetizers: [
    {
      img: "url(./images/PAN_FRIED_GYOZA.avif)",
      name: "PAN FRIED GYOZA",
      title: "Ajisen signature dumplings, made in house",
      price: "8.99",
    },
    {
      img: "url(./images/CHICKEN_KARAAGE.avif)",
      name: "CHICKEN KARAAGE",
      title: "Japanese fried chicken served with sauce",
      price: "8.99",
    },
    {
      img: "url(./images/KIMCHI.avif)",
      name: "KIMCHI",
      title: "Spicy pickled cabbage",
      price: "8.99",
    },
  ],
  drinks: [
    {
      img: "url(./images/JAPANESE_GREEN_TEA.avif)",
      name: "JAPANESE GREEN TEA",
      title: "Refreshing hot or iced matcha green tea",
      price: "5.99",
    },
    {
      img: "url(./images/COKE.avif)",
      name: "COKE",
      title: "Classic Coca-Cola",
      price: "5.99",
    },
    {
      img: "url(./images/SPRITE.avif)",
      name: "SPRITE",
      title: "Lemon-lime flavored soda",
      price: "5.99",
    },
  ],
};
