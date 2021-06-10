// Comment: This worked fine
// const grandparent = document.getElementById('grandparent-id');
// changeColor(grandparent);

//  Comment:  This never worked -- I really don't know what's wrong wtih it.  I seemingly copied it exactly.
// const parents = Array.from(document.getElementsByClassName("parents"));
// parents.forEach(changeColor);

// Comment:  This worked fine!!!  Yay!
// const grandparent = document.querySelector('#grandparent-id');
// changeColor(grandparent);

// Comment:  This worked fine too!
// const grandparent = document.querySelector(".grandparent");
// changeColor(grandparent);

// Comment:  This worked fine
// const parent = document.querySelector(".parent");
// changeColor(parent);

// Comment:  This worked fine
// const parent = document.querySelectorAll(".parent");
// parent.forEach(changeColor);

// Comment:  This worked fine
// const grandparent = document.querySelector(".grandparent")
// const childOne = grandparent.querySelector(".child");
// changeColor(childOne);

// Comment:  This worked fine        
// const grandparent = document.querySelector(".grandparent")
// const children = document.querySelectorAll(".child")
// children.forEach(changeColor);

// Comment:  This worked fine         
const childOne = document.querySelector("#child-one");
const parent = childOne.parentElement;
changeColor(parent);
// const grandparent = parent.parentElement;
// changeColor(grandparent);
const grandparent = childOne.closest(".grandparent");
changeColor(grandparent);



function changeColor(element) {
    element.style.backgroundColor = "#333";
}