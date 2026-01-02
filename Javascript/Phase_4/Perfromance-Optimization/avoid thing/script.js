
const ul = document.querySelector("ul");
const space = document.createDocumentFragment()// better way to use the dom if we want to print a large amount of something on the screen
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  space.appendChild(li);
}

ul.appendChild(space)
