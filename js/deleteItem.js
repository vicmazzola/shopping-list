import { checkBoughtList } from "./checkBoughtList.js";
import { checkEmptyList } from "./checkEmptyList.js";
import { saveListsToLocalStorage } from "./localStorageHandler.js";


const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

const deleteItem = (element) => {
    let confirmation = confirm("Are you sure you want to delete this item?");

    if (confirmation) {
        element.remove();

        checkEmptyList(shoppingList);
        checkBoughtList(boughtList);
        saveListsToLocalStorage(shoppingList, boughtList);
    }
}

export { deleteItem };



