/* Add a background color for the page */
body {
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;
}

/* Style the container */
.container {
    max-width: 800px;
    margin-top: 50px;
}

/* Heading */
h1 {
    font-size: 2.5rem;
    color: #007bff;
}

/* Input and Button Styling */
#myInput {
    border-radius: 10px;
    padding: 15px;
}

#add-task {
    border-radius: 10px;
}

/* List Items (Tasks) */
.list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 10px;
}

/* Fade effect for task completion */
.fade {
    opacity: 0;
    transition: opacity 1s ease-out;
}

/* Style for checked tasks */
.list-group-item.completed {
    text-decoration: line-through;
    background-color: #d4edda;
}