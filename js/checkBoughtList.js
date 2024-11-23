const boughtListContainer = document.getElementById("bought-list-container");
const shoppingList = document.getElementById("shopping-list");
const boughtList = document.getElementById("bought-list");


export function checkBoughtList(list) {
    if (list.childElementCount === 0) {
        boughtListContainer.style.display = "none";
    } else {
        boughtListContainer.style.display = "block";
    }
}