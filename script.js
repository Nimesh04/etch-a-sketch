// Capture the elements from html

const div = document.querySelector(".sketchContainer");
const resetBtn = document.querySelector("#popUp");
let row, column;

// Creates the random numbers and returns a list for the rgb 

function randomColor(a = 0.1){
    let r = parseInt(Math.random() * 1000 % 257);
    let g = parseInt(Math.random() * 1000 % 257);
    let b = parseInt(Math.random() * 1000 % 257);
    return `rgba(${r},${g}, ${b}, ${a})`;
}

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

function createGrid(size = 16){
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


// Gets the value of rgb and then checks if alpha has a value that is less than 1.0, if it has then it increase it

function increaseOpacity(valueOfBg){
    let red, green,blue, alpha;
    [red, green, blue, alpha] = valueOfBg.match(/[0-9]+(\.[0-9])?/g);
    if(alpha === undefined) alpha = 1.0;
    if(alpha < 1.0) alpha = parseFloat(alpha) + 0.1;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

// first it checks if the background color is empty(white), if it is, then it gets the random color and assigns it
// If it already has color, then takes that color and calls the function to increase the opacity.

function paintSquare(element){
    console.log("Hovering");
    if(element.style.backgroundColor == ""){
        element.style.backgroundColor = randomColor(0.1);
    }else{
        element.style.backgroundColor = increaseOpacity(element.style.backgroundColor);
    }
}

// When the mouse hovers over the squares, it paints that square

function hoverEffect(){
    const hoverDiv = document.querySelectorAll("div.row"); 
    hoverDiv.forEach(element => {
        element.addEventListener("mouseenter",()=>paintSquare(element));
    });
}

// Begin

createGrid();
const EMPTY_COLOR = "rgba(0, 0, 0, 0)";


// Captures the click on the reset button

resetBtn.addEventListener("click", () => resetGrid());



