
window.onload = function() {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);

    });
}

function handleItemForm(event, formRef) {
    if(event.preventDefault) {
        event.preventDefault();
    }
 addItemToShoppingList();
    return false;
}

function addItemToShoppingList(){
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0,10000000); //create an id and then call our getrandomint function

//creates list item html and appends to page
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    console.log("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml)
}
//attach an event to the button
function setDeleteButtonEvent(id){
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
        console.log("DeleteButton Works") //to test create consolelog
    });
}

//add the id to the list item and button
function createListItemHtml(itemName, itemAmount, id) {
    return `<li id="item${id}"> 
                ${itemName} - ${itemAmount}
                <button type="button${id}">Delete Item</button>
            </li>`;

}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled)) + minCeiled; // The maximum is exclusive and the minimum is inclusive
}