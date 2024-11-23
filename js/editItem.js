import { saveListsToLocalStorage } from "./localStorageHandler.js";
import {generateWeekday} from "./generateWeekday.js";

const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

export const editItem = (element) => {
    let newItem = prompt("Enter the new item name:");

    if (newItem !== null && newItem.trim() !== "") {
        const updatedItemText = element.querySelector("#title-item");
        updatedItemText.textContent = newItem;

        const wasBought = element.querySelector(".checkbox-input").checked;

        if (wasBought) {
            element.querySelector(".checkbox-input").checked = true;
            element.querySelector(".customized-checkbox").classList.add("checked");
            updatedItemText.style.textDecoration = "line-through";
        }

        // Update creation date to the date it was edited
        const creationDate = element.querySelector(".text-date");
        creationDate.textContent = generateWeekday();
        saveListsToLocalStorage(shoppingList, boughtList);
    }
}



