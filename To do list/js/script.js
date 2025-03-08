document.addEventListener('DOMContentLoaded', function () {
    // Function that gets called when the button is clicked
    function storeValues() {
        let inputValue = document.getElementById('myInput').value;

        // Check if the input value is not empty
        if (inputValue.trim() !== "") {
            // Create a new list item (<li>)
            let li = document.createElement('li');
            li.classList.add('list-group-item'); // Add Bootstrap list item class
            
            // Create a new checkbox input element
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';  // Make it a checkbox
            
            // Add the checkbox to the list item
            li.appendChild(checkbox);
            
            // Add the text (input value) to the list item
            li.appendChild(document.createTextNode(inputValue));
            
            // Add the list item to the task list (<ul>)
            document.getElementById('task-list').appendChild(li);
            
            // Clear the input field after adding the task
            document.getElementById('myInput').value = "";

            // Add event listener to checkbox to fade out the task when checked
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    li.classList.add('fade');  // Apply the fade effect
                    li.classList.add('completed'); // Mark the task as completed

                    // After the fade effect, remove the task from the list
                    setTimeout(function() {
                        li.remove();
                    }, 1000); // Remove after 1 second (duration of fade)
                }
            });
        }
    }

    // Add an event listener to the button that will call storeValues when clicked
    document.getElementById('add-task').addEventListener('click', storeValues);
});