const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
const spanNewItem = document.querySelector("#newItem");
spanBye.remove();
div.append(spanBye);
div.append(spanNewItem);

spanHi.classList.toggle('hi15');
spanHi.style.color = 'red'
spanBye.style.color = 'green'
spanHi.style.backgroundColor = 'yellow'
spanBye.style.backgroundColor = 'lightgreen';
spanNewItem.innerHTML = "<br><br>New Item";

const items = [
    {   name:  "Bike",  price: 100 },
    {   name:  "TV",  price: 200 },
    {   name:  "Album",  price: 10 },
    {   name:  "Book",  price: 5 },
    {   name:  "Phone",  price: 500 },
    {   name:  "Computer",  price: 1000 },
    {   name:  "Keyboard",  price: 25 }
];

const foundItem = items.find((item) => {
    return item.name === "Book";
});

console.log(foundItem);

items.forEach((thisItem) => {
    console.log(thisItem.name);
})
const filteredItems = items.filter((items) => {
    return items.price <= 100;
})
spanNewItem.innerHTML = items[0].name;
// console.log("This is the regular underlying items array\n");
// console.log(items);
console.log("This is the filtered items array\n");
console.log(filteredItems);
const itemNames = items.map((items) => {
    return items.name;
})
console.log("Map returns an array of just item names here");
console.log(itemNames);