// Capture the elements from html

const div = document.querySelector(".sketchContainer");
const resetBtn = document.querySelector("#popUp");
let row, column;

createGrid(10);
// Resets the grid according the size given by the user, but has to be between 1 to 100

function resetGrid(){
    let gridSize = prompt("Number of square in the girds? Less than 100:");
    if(gridSize > 0 & gridSize <= 100){
        div.innerHTML= '';
        createGrid(gridSize);
    }else{
        alert("Keep the number between 1 to 100.");
        gridSize = prompt("Number of square in the girds? Less than 100:");
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
    hoverEffect();
}
}


// Creates the random numbers and returns a list for the rgb 

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r,g,b];
}


// Captures the click on the reset button

resetBtn.addEventListener("click", () => resetGrid());


// When the mouse hovers over the squares, this changes the color and sets the timer for it to be 500 millisecond

function hoverEffect(){
    const hoverDiv = document.querySelectorAll("div.row");
    hoverDiv.forEach(element => {
        element.addEventListener("mouseover",()=>{
            const colorRgb = randomColor();
            element.style.backgroundColor = `rgb(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]})`;
        setTimeout(() => {
            element.style.backgroundColor = "white";
        }, 500);
        });
    })
}

