// const memoryContainer = document.getElementById("memoryGrid");

// let items = [
//   "🍜",
//   "🍲",
//   "🍱",
//   "🍣",
//   "🥟",
//   "🍤",
//   "🍙",
//   "🍥",
//   "🍜",
//   "🍲",
//   "🍱",
//   "🍣",
//   "🥟",
//   "🍤",
//   "🍙",
//   "🍥",
// ];
// let shuffledItems = [];

// // console.log(items);

// while (items.length > 0) {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   let removedItem = items.splice(randomIndex, 1)[0];
//   shuffledItems.push(removedItem);
// }

// const createMemoryItem = (item) => {
//   return `<div id="item" class="memoryItem">${item}</div>`;
// };

// let itemsHTML = "";

// shuffledItems.forEach((item) => {
//   const memoryItem = createMemoryItem(item);
//   itemsHTML += memoryItem;
// });

// memoryContainer.innerHTML = itemsHTML;

// const num = [1, 2, 3];

// const a = num.map((n) => {
//   return 2 * n;
// });
// console.log(a);

const num = [
  { total: 100 },
  {
    total: 200,
  },
  { total: 200 },
  { total: 10 },
];
let b = 0;
const newNum = num.map((a) => {
  b += a.total;
  return b;
});

console.log(b);
