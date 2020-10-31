console.log("===================== INTEGRADOR ===================");

localStorage.setItem('people', JSON.stringify([]));

let nameBox = document.getElementById("input-name");
let surnameBox = document.getElementById("input-surname");
let ageBox = document.getElementById("input-age");
let tableWrapper = document.getElementById("table-container");
let addBtn = document.getElementById("add-btn");

let addPerson = e => {
    e.preventDefault();
    var people = JSON.parse(localStorage.getItem('people'));
    var newPerson = {
        name: nameBox.value,
        surname: surnameBox.value,
        age: ageBox.value,
    }

    people.push(newPerson);

    localStorage.setItem('people', JSON.stringify(people));
    renderTable(people);
}

let renderTable = people => {
    tableWrapper.innerHTML = "";
    let table = document.createElement("table");
    let header = document.createElement("tr");

    let headers = Object.keys(people[0]);

    headers.forEach(h => {
        let column = document.createElement("th");
        column.innerText = h.charAt(0).toUpperCase().concat(h.slice(1));
        header.appendChild(column);
    });

    table.appendChild(header);

    people.forEach(person => {
        let row = renderRow(person);
        table.appendChild(row);
    });

    tableWrapper.appendChild(table);
}

let renderRow = person => {
    let newRow = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = person.name;

    let surname = document.createElement("td");
    surname.innerText = person.surname;

    let age = document.createElement("td");
    age.innerText = person.age;

    newRow.appendChild(name);
    newRow.appendChild(surname);
    newRow.appendChild(age);

    return newRow;
}

addBtn.addEventListener("click", e => {
    addPerson(e);
});