// Your code here 
document.addEventListener('DOMContentLoaded', (event) => {
    const addName = document.getElementById('add');
    addName.addEventListener('click', (e) => {
        // why do I have to add this line?: 
        // answer: ensures the page does not reload when the click happens, specifically useful for buttons within forms
        e.preventDefault();

        const ul = document.getElementById('shopping-list');
        const li = document.createElement('li');
        const input = document.getElementById('name');
        const type = document.getElementById('type');

        li.innerText = input.value;

        // set data type
        li.setAttribute('data-type', type.value)

        ul.appendChild(li);

    })


})