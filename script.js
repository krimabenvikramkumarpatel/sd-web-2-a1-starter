"use strict";

const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 }
];

// ---------- EXERCISE 1 ----------
const namesList = document.getElementById("names-list");

characters.forEach(char => {
  console.log(char.name);

  const li = document.createElement("li");
  li.textContent = char.name;
  namesList.appendChild(li);
});

// ---------- EXERCISE 2 ----------
const youngList = document.getElementById("young-characters-list");

const young = characters.filter(c => c.age < 40);

young.forEach(c => {
  console.log(c.name);

  const li = document.createElement("li");
  li.textContent = c.name;
  youngList.appendChild(li);
});

// ---------- EXERCISE 3 ----------
function renderList(array, elementId) {
  const target = document.getElementById(elementId);

  array.forEach(item => {
    if (!item.name) {
      console.error("Missing name property");
      return;
    }

    const li = document.createElement("li");
    li.textContent = item.name;
    target.appendChild(li);
  });
}

renderList(characters, "function-list");

// ---------- EXERCISE 4 ----------
function filterByAge(array, age, elementId) {
  const target = document.getElementById(elementId);

  const filtered = array.filter(c => c.age < age);

  filtered.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c.name;
    target.appendChild(li);
  });
}

filterByAge(characters, 40, "age-filter-list");

// ---------- EXERCISE 5 ----------
function safeRender(array, listId, errorId) {
  const list = document.getElementById(listId);
  const errorBox = document.getElementById(errorId);

  array.forEach(obj => {
    if (!obj.name) {
      const msg = "Error: object missing name";

      console.error(msg);

      const div = document.createElement("div");
      div.className = "error-message";
      div.textContent = msg;

      errorBox.appendChild(div);
      return;
    }

    const li = document.createElement("li");
    li.textContent = obj.name;
    list.appendChild(li);
  });
}

safeRender(characters, "error-handling-list", "error-messages");

// ---------- EXERCISE 6 ----------
const brokenCharacters = [
  { id: 1, age: 20 },
  { id: 2, name: "Valid Person", age: 30 },
  { id: 3, age: 40 }
];

safeRender(brokenCharacters, "broken-array-list", "broken-array-errors");
