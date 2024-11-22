import { createListItem } from "./createListItem.js";
import { checkEmptyList } from "./checkEmptyList.js";

const item = document.getElementById("input-item");

const shoppingList = document.getElementById("shopping-list");

export function addItem(event) {
    event.preventDefault();

    if (item.value === "") {
        alert("Please, add an item!");
        return;
    }

    const listItem = createListItem(item.value);
    shoppingList.appendChild(listItem);
    checkEmptyList(shoppingList);
    item.value = "";
}
