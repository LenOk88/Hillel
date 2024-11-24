const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
        array.splice(index, 1);
    }
    return null;
}

removeElement(array, 4);

console.log(array);