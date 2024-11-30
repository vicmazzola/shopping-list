import { saveListsToLocalStorage } from "./localStorageHandler.js";
import {generateWeekday} from "./generateWeekday.js";

const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

export const editItem = (element) => {

    const currentName = element.querySelector("#title-item").textContent;

    Swal.fire({
        title: "Edit the item",
        input: "text", //
        inputValue: currentName,
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        inputValidator: (value) => {
            if (!value || value.trim() === "") {
                return "You need to write something!";
            }
        },


    }).then((result) => {
        if (result.isConfirmed) {
            const newItem = result.value.trim();
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


            Swal.fire({
                icon: "success",
                title: "Updated!",
                text: "The item has been successfully updated.",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    });
};



