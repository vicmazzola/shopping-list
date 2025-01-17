const emptyListMessage = document.getElementById("empty-list-message");



export function checkEmptyList(list) {
    console.log(list);
    if (list.querySelectorAll("li").length === 0) {
        emptyListMessage.style.display = "block";
    } else {
        emptyListMessage.style.display = "none";
    }

}
