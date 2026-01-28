const gridSize = document.getElementById("gridSize");
const gridContainer = document.getElementById("gridContainer");
const createGridBtn = document.getElementById("createGridBtn");
const clearBtn = document.getElementById("clearBtn");
const randomBtn = document.getElementById("randomBtn");
const eraserBtn = document.getElementById("eraserBtn");
const darkenBtn = document.getElementById("darkenBtn");
const blackBtn = document.getElementById("blackBtn");
let currentMode = "random";

randomBtn.addEventListener("click", () => {
    currentMode = "random";
});// when click set mode to random color

eraserBtn.addEventListener("click", () => {
    currentMode = "eraser";
});// when click set mode to eraser

darkenBtn.addEventListener("click", () => {
    currentMode = "darken";
}); // when click set mode to darken

blackBtn.addEventListener("click", () => {
    currentMode = "black";
}); // when click set mode to black

createGrid(16); // Initial grid

function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear existing grid

    
    const container= gridContainer.clientWidth; // Fix container size relative to its width
    const cellSize = container / size; // Calculate cell size

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell"); // Add class for styling
        cell.style.width = `${cellSize}px`; 
        cell.style.height = `${cellSize}px`;

        cell.addEventListener("mouseenter", () => chooseMode(cell));

        gridContainer.appendChild(cell);
    }


}

function chooseMode(cell) {
    if (currentMode === "random") {
        randomColor(cell);
    } else if (currentMode === "eraser") {
        eraserMode(cell);
    } else if (currentMode === "darken") {
        darkenMode(cell);
    } else if (currentMode === "black") {
        blackMode(cell);
    }
}

function randomColor(cell) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} // set cell to random color

function eraserMode(cell) {
    cell.style.backgroundColor = "";
} // set cell to white

function darkenMode(cell) {
    let darkness = Number(cell.dataset.darkness) || 0;
    darkness = Math.min(darkness + 10, 100);
    cell.dataset.darkness = darkness;// store darkness level in data attribute
    cell.style.backgroundColor = `rgba(0, 0, 0, ${darkness / 100})`;
} // darken cell by 10%

function blackMode(cell) {
    cell.style.backgroundColor = "black";
} // set cell to black



createGridBtn.addEventListener("click", () => {
    let size = Number(gridSize.value);

    if (size < 1 || size > 100 || isNaN(size)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createGrid(size);

});


clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".grid-cell").forEach(cell => {
        cell.style.backgroundColor = "";
        cell.dataset.darkness = 0;

    });
});