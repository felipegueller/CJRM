const ul = document.querySelector("ul");
const form = document.querySelector("form");

const removeLiElement = event => {
    const clickedElement = event.target;
    const isNotLiElement = clickedElement.tagName !== "LI";

    if (isNotLiElement) return;
    clickedElement.remove();
}

const insertLiElement = event => {
    event.preventDefault();
    const { item } = form;
    const value = item.value.trim();
    const isEmpty = !value.length;

    if (isEmpty) return;

    const li = document.createElement("li");
    li.textContent = value;

    ul.append(li);
    item.value = "";
}

ul.addEventListener('click', removeLiElement);
form.addEventListener('submit', insertLiElement)