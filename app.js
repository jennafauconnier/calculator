let num = document.getElementById("one");

let stringInt = num.dataset.number

let newNumb = parseInt(stringInt, 10)


console.log(newNumb + 4)

let tagName = document.querySelectorAll('*[id]');

let transformToArray = Array.from(tagName);

function getBtnClicked() {
    let getOnlyNumb = transformToArray.slice(1);
    return getOnlyNumb;
}

console.log(getBtnClicked());