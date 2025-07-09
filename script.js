// Capture the elements from html

const div = document.querySelector(".sketchContainer");
const resetBtn = document.querySelector("#popUp");
let row, column;

createGrid(10);
// Resets the grid according the size given by the user, but has to be between 1 to 100

function resetGrid(){
    let gridSize = prompt("Number of square in the girds? Less than 100:");
    if(gridSize > 0 & gridSize <= 100){
        createGrid(gridSize);
    }else{
        alert("Keep the number between 1 to 100.");
        gridSize = praseInt(prompt("Number of square in the girds? Less than 100:"));
    }
}

// From the size given by the user, this creates the grid

function createGrid(size){
    for(let i = 0; i < size; i++){
    column = document.createElement("div");
    column.classList.add("column");
    for(let j = 0; j< size; j++){
        row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
    }
    div.appendChild(column);

    
}
}
// Captures the click on the reset button

resetBtn.addEventListener("click", () => resetGrid());


// When the mouse hovers over the squares, this changes the color and sets the timer for it to be 500 millisecond

const hoverDiv = document.querySelectorAll("div.row");
hoverDiv.forEach(element => {
    element.addEventListener("mouseover",()=>{
    element.style.backgroundColor = "red";

    setTimeout(() => {
        element.style.backgroundColor = "white";
    }, 500);
    });
})

