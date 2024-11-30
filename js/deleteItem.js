import {checkBoughtList} from "./checkBoughtList.js";
import {checkEmptyList} from "./checkEmptyList.js";
import {saveListsToLocalStorage} from "./localStorageHandler.js";


const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");

const deleteItem = (element) => {
    Swal.fire({
        title: "Are you sure?",
        text: "This action will delete the item permanently.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
    }).then((result) => {
        if (result.isConfirmed) {

            element.remove();

            checkEmptyList(shoppingList);
            checkBoughtList(boughtList);
            saveListsToLocalStorage(shoppingList, boughtList);


            Swal.fire({
                title: "Deleted!",
                text: "The item has been deleted.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
            });
        }
    });
};

export {deleteItem};

const deleteAllItems = () => {
    let confirmation = confirm("Are you sure you want to delete all items?");
    if (confirmation) {

        shoppingList.innerHTML = "";
        boughtList.innerHTML = "";


        checkEmptyList(shoppingList);
        checkBoughtList(boughtList);
        saveListsToLocalStorage(shoppingList, boughtList);
    }
};

export {deleteAllItems};

