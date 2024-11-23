export function saveListsToLocalStorage(shoppingList, boughtList) {
    const shoppingItems = Array.from(shoppingList.children).map(item => ({
        name: item.querySelector("#title-item")?.textContent || "",
        bought: false,
        date: item.querySelector(".text-date")?.textContent || ""
    }));

    const boughtItems = Array.from(boughtList.children).map(item => ({
        name: item.querySelector("#title-item")?.textContent || "",
        bought: true,
        date: item.querySelector(".text-date")?.textContent || ""
    }));

    console.log("Saving Lists to Local Storage:", shoppingItems, boughtItems);
    localStorage.setItem("shoppingList", JSON.stringify(shoppingItems));
    localStorage.setItem("boughtList", JSON.stringify(boughtItems));
}

/**
 * @param {HTMLElement} shoppingList -
 * @param {HTMLElement} boughtList -
 * @param {Function} createListItem -
 * @param {Function} checkEmptyList -
 * @param {Function} checkBoughtList -
 */

export function loadListsFromLocalStorage(shoppingList, boughtList, createListItem, checkEmptyList, checkBoughtList) {
    const savedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];

    savedItems.forEach(item => {
        if (item && item.name?.trim() !== "") {
            const listItem = createListItem(item.name);
            listItem.querySelector(".text-date").textContent = item.date || "No Date Available";

            if (item.bought) {
                boughtList.appendChild(listItem);
                listItem.querySelector(".checkbox-input").checked = true;
                listItem.querySelector(".customized-checkbox").classList.add("checked");
                listItem.querySelector("#title-item").style.textDecoration = "line-through";
            } else {
                shoppingList.appendChild(listItem);
            }
        }
    });

    checkEmptyList(shoppingList);
    checkBoughtList(boughtList);
}
