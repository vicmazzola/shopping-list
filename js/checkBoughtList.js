
const boughtListContainer = document.getElementById("bought-list-container");



export function checkBoughtList(list) {
    if (list.childElementCount === 0) {
        boughtListContainer.style.display = "none";
    } else {
        boughtListContainer.style.display = "block";
    }

}