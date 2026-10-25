import { sampleItems } from "../../data/sample-items.js";

const collection = document.querySelector("#collection");

function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const heading = document.createElement("h3");
  heading.textContent = item.title;

  const category = document.createElement("p");
  category.className = "eyebrow";
  category.textContent = item.category;

  const description = document.createElement("p");
  description.textContent = item.description;

  card.append(heading, category, description);
  return card;
}

if (collection) {
  collection.replaceChildren(...sampleItems.map(createCard));
}
