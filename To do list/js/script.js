function storeValues() {
    let inputValue = document.getElementById('myInput').value; // Use .value to get the input's value
    console.log(inputValue); // You can check the stored value in the console
}

document.getElementById('add-task').addEventListener('click', storeValues);