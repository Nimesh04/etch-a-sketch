// Capture the elements from html

const div = document.querySelector(".sketchContainer");
const newBoard = document.querySelector("#popUp");
let shiftKeyPressed = false;
let ctrlKeyPressed = false;
let row, column;

// Creates the random numbers and returns a list for the rgb 

function randomColor(a = 0.1){
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    return `rgba(${r},${g},${b},${a})`;
}


// Creates new grid according the size given by the user, but has to be between 1 to 100

function createNewBoard(){
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
    }
    hoverEffect();
}


// Begin

createGrid();

// Gets the value of rgb and then checks if alpha has a value that is less than 1.0, if it has then it increase it

function increaseOpacity(valueOfBg){
    let red, green,blue, alpha;
    [red, green, blue, alpha] = valueOfBg.match(/[0-9]+(\.[0-9])?/g);
    if(alpha === undefined) alpha = 1.0;
    if(alpha < 1.0)alpha = parseFloat(alpha) + 0.1;
    return `rgba(${red}, ${green}, ${blue}, ${alpha.toString()})`;
}

// Decrease the opacity to earse the color

function decreaseOpacity(bgValue){
    let red, green, blue, alpha;
    [red,green,blue,alpha] = bgValue.match(/[0-9]+(\.[0-9])?/g);
    if(alpha == undefined) alpha = 1.0;
    if(alpha <= 0.1) return `rgb(255,255,255)`;
    if(alpha > 0.1 & alpha <= 1.0) alpha = parseFloat(alpha) -0.1;
    return `rgba(${red},${green},${blue},${alpha})`;
}

// first it checks if the background color is empty(white), if it is, then it gets the random color and assigns it
// If it already has color, then takes that color and calls the function to increase the opacity.

function paintSquare(element){
    if(shiftKeyPressed){
        ctrlKeyPressed = false;
        if(window.getComputedStyle(element).backgroundColor == EMPTY_COLOR){
            element.style.backgroundColor = randomColor(0.1);
        }else{
            element.style.backgroundColor = increaseOpacity(element.style.backgroundColor);
        }
    }
    if(ctrlKeyPressed){
        shiftKeyPressed = false;
        if(window.getComputedStyle(element).backgroundColor == EMPTY_COLOR){
            element.style.backgroundColor = EMPTY_COLOR;
        }else{
            element.style.backgroundColor = decreaseOpacity(element.style.backgroundColor);
        }
    }
}

// When the mouse hovers over the squares, it paints that square

function hoverEffect(){
    const hoverDiv = document.querySelectorAll("div.sketchContainer div.row"); 
    hoverDiv.forEach(element => {
        element.addEventListener("mouseenter",()=>paintSquare(element));
    });
}


// Captures the click on the reset button
const EMPTY_COLOR = "rgb(255, 255, 255)";
document.addEventListener("keydown", trigger =>{
    if(trigger.shiftKey) shiftKeyPressed = true;
    if(trigger.ctrlKey) ctrlKeyPressed = true;
});


document.addEventListener("keyup", trigger =>{
    if(trigger.key == "Shift") shiftKeyPressed = false;
    if(trigger.key == "Control") ctrlKeyPressed = false;

})
shiftKeyPressed,ctrlKeyPressed = false;
newBoard.addEventListener("click", () => createNewBoard());



