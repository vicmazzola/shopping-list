import { saveListsToLocalStorage } from "./localStorageHandler.js";
import {generateWeekday} from "./generateWeekday.js";

const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

export const editItem = (element) => {

    const currentName = element.querySelector("#title-item").textContent;
    let newItem = prompt("Edit the item:", currentName);


    if (newItem !== null && newItem.trim() !== "") {
        const updatedItemText = element.querySelector("#title-item");
        updatedItemText.textContent = newItem;


        const wasBought = element.querySelector(".checkbox-input").checked;

        if (wasBought) {
            element.querySelector(".checkbox-input").checked = true;
            element.querySelector(".customized-checkbox").classList.add("checked");
            updatedItemText.style.textDecoration = "line-through";
        }


        const creationDate = element.querySelector(".text-date");
        creationDate.textContent = generateWeekday();
        saveListsToLocalStorage(shoppingList, boughtList);
    }
}



