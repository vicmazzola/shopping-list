import { editItem } from "./editItem.js";
import { deleteItem } from "./deleteItem.js";
import { generateWeekday } from "./generateWeekday.js";
import { checkBoughtList } from "./checkBoughtList.js";
import { saveListsToLocalStorage } from "./localStorageHandler.js";

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

    checkboxLabel.addEventListener("click", function () {
        const customizedCheckbox = checkboxLabel.querySelector(".customized-checkbox");
        const titleItem = listItem.querySelector("#title-item")
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
        saveListsToLocalStorage(shoppingList, boughtList);
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
        saveListsToLocalStorage(shoppingList, boughtList);
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
        saveListsToLocalStorage(shoppingList, boughtList);
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
