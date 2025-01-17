import { addItem } from "./js/addItems.js";
import { checkBoughtList } from "./js/checkBoughtList.js";
import { checkEmptyList } from "./js/checkEmptyList.js";
import { createListItem } from "./js/createListItem.js"
import {loadListsFromLocalStorage } from "./js/localStorageHandler.js";
import { deleteAllItems } from "./js/deleteItem.js";

const saveItemButton = document.getElementById("add-item");
saveItemButton.addEventListener("click", addItem);

const deleteAllButton = document.getElementById("delete-all");
deleteAllButton.addEventListener("click", deleteAllItems);

const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

checkBoughtList(boughtList);


document.addEventListener("DOMContentLoaded", () => {
    loadListsFromLocalStorage(shoppingList, boughtList, createListItem, checkEmptyList, checkBoughtList);
<<<<<<< HEAD
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  
=======
});
>>>>>>> 92ec63e104f11b5d9036e509cef067981239be9e
