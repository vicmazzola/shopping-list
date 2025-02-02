import {createListItem} from "./createListItem.js";
import {checkEmptyList} from "./checkEmptyList.js";
import { saveListsToLocalStorage } from "./localStorageHandler.js"

const item = document.getElementById("input-item");
const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

export function addItem(event) {
    event.preventDefault();

    if (item.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops....",
            text: "Hey bro, you forgot to type something!",
        }).then(() => {
            item.focus();
        })
        return;
    }

    const listItem = createListItem(item.value);
    shoppingList.appendChild(listItem);
    checkEmptyList(shoppingList);
    saveListsToLocalStorage(shoppingList, boughtList);
    item.value = "";
}


