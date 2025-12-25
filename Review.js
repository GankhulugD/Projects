// DOMs
const personImage = document.getElementById("img");
const nameDisplay = document.getElementById("name");
const statusDisplay = document.getElementById("status");
const aboutDisplay = document.getElementById("about");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const randomBtn = document.getElementById("surp");

// Buttons
prevBtn.addEventListener("click", showPrevPerson);
nextBtn.addEventListener("click", showNextPerson);
randomBtn.addEventListener("click", showRandomPerson);

const people = [
  {
    image: "url(./images/elon_musk_royal_society.jpg)",
    name: "Elon Musk",
    status: "CEO of Tesla",
    description:
      "Elon Reeve Musk is a businessman and entrepreneur known for his leadership of Tesla, SpaceX, X, and xAI. Musk has been the wealthiest person in the world since 2021; as of December 2025, Forbes estimates his net worth to be around $684 billion.",
  },
  {
    image: "url(./images/steve-jobs.jpg)",
    name: "Steve Jobs",
    status: "CEO of Apple",
    description:
      "Steven Paul Jobs was an American businessman, inventor, and investor best known for co-founding the technology company Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar.",
  },
  {
    image: "url(./images/bill-gates_headshot_5x4.webp)",
    name: "Bill Gates",
    status: "Founder of Microsoft",
    description:
      "William Henry Gates III is an American businessman and philanthropist. A pioneer of the microcomputer revolution of the 1970s and 1980s, he co-founded the software company Microsoft in 1975 with his childhood friend Paul Allen.",
  },
];

let currentIndex = 0;

// Functions
function showPrevPerson() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = people.length - 1;
  }
  updatePersonDisplay();
}

function showNextPerson() {
  currentIndex++;
  if (currentIndex > people.length - 1) {
    currentIndex = 0;
  }
  updatePersonDisplay();
}

function showRandomPerson() {
  let randomIndex = Math.floor(Math.random() * people.length);
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * people.length);
  }
  currentIndex = randomIndex;
  updatePersonDisplay();
}

function updatePersonDisplay() {
  const person = people[currentIndex];
  personImage.style.backgroundImage = person.image;
  nameDisplay.innerHTML = person.name;
  statusDisplay.innerHTML = person.status;
  aboutDisplay.innerHTML = person.description;
}
