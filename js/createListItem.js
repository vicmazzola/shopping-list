import { editItem } from "./editItem.js";
import { deleteItem } from "./deleteItem.js";
import { generateWeekday } from "./generateWeekday.js";
import { checkBoughtList } from "./checkBoughtList.js";

const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");
let counter = 0;

export function createListItem(item) {
    const listItem = document.createElement("li");
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");

    const itemNameContainer = document.createElement("div");

    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + counter++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (event) {
        const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
        const customizedCheckbox = event.currentTarget.querySelector(".customized-checkbox");
        const titleItem = event.currentTarget.closest("li").querySelector("#title-item")
        if (checkboxInput.checked) {
            customizedCheckbox.classList.add("checked");
            titleItem.style.textDecoration = "line-through";
            boughtList.appendChild(listItem);
        } else {
            customizedCheckbox.classList.remove("checked");
            titleItem.style.textDecoration = "none";
            shoppingList.appendChild(listItem);
        }

        checkBoughtList(boughtList);
        saveListsToLocalStorage();
    });

    const customizedCheckbox = document.createElement("div");
    customizedCheckbox.classList.add("customized-checkbox");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customizedCheckbox);

    checkboxContainer.appendChild(checkboxLabel);
    itemNameContainer.appendChild(checkboxContainer);

    const itemName = document.createElement("p");
    itemName.id = "title-item";
    itemName.innerText = item;
    itemNameContainer.appendChild(itemName);

    const buttonsContainer = document.createElement("div");
    const removeButton = document.createElement("button");
    removeButton.classList.add("list-item-button");

    const removeImage = document.createElement("img");
    removeImage.src = "img/delete.svg";
    removeImage.alt = "Remove";

    removeButton.addEventListener("click", function () {
        deleteItem(listItem);
    });

    removeButton.appendChild(removeImage);
    buttonsContainer.appendChild(removeButton);

    const editButton = document.createElement("button");
    editButton.classList.add("list-item-button");

    const editImage = document.createElement("img");
    editImage.src = "img/edit.svg";
    editImage.alt = "Edit";

    editButton.addEventListener("click", function () {
        editItem(listItem);
    });

    editButton.appendChild(editImage);
    buttonsContainer.appendChild(editButton);

    listItemContainer.appendChild(itemNameContainer);
    listItemContainer.appendChild(buttonsContainer);

    const itemDate = document.createElement("p");
    itemDate.innerText = generateWeekday();
    itemDate.classList.add("text-date");

    listItem.appendChild(listItemContainer);
    listItem.appendChild(itemDate);

    return listItem;
}
