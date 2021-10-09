// Récupere la valeur du button puis le parse pour l'additionner

let num = document.getElementById("one");

function createNewNumber() {
    let stringInt = num.dataset.number
    let newNumb = parseInt(stringInt, 10)
    return newNumb + 5;
}

// console.log(createNewNumber());

// Récuperer la valeur de tous les id et rendre en tableau

let tagName = document.querySelectorAll('*[id]');

function getBtnClicked() {
    let transformToArray = Array.from(tagName);
    let getOnlyNumb = transformToArray.slice(1);
    let arrayOfNumb = getOnlyNumb;

    arrayOfNumb.forEach(function(e) {
        return arrayOfNumb.dataset.number
    })
    // return getOnlyNumb;
}

console.log(getBtnClicked());