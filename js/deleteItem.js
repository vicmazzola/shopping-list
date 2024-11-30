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
                timer: 1000,
                showConfirmButton: false,
            });
        }
    });
};

export {deleteItem};

const deleteAllItems = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "This action will delete all items from the lists!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete all",
        cancelButtonText: "Cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            shoppingList.innerHTML = "";
            boughtList.innerHTML = "";

            checkEmptyList(shoppingList);
            checkBoughtList(boughtList);
            saveListsToLocalStorage(shoppingList, boughtList);

            Swal.fire({
                title: "Deleted!",
                text: "All items have been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    });
};
export {deleteAllItems};

