import { addItem } from "./js/addItems.js";
import { checkBoughtList } from "./js/checkBoughtList.js";
import { checkEmptyList } from "./js/checkEmptyList.js";
import { createListItem } from "./js/createListItem.js"
import {loadListsFromLocalStorage } from "./js/localStorageHandler.js";


const saveItemButton = document.getElementById("add-item");
saveItemButton.addEventListener("click", addItem);

const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

checkBoughtList(boughtList);


document.addEventListener("DOMContentLoaded", () => {
    loadListsFromLocalStorage(shoppingList, boughtList, createListItem, checkEmptyList, checkBoughtList);
});