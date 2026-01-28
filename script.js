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

    
    const container= gridContainer.clientWidth; // Fixed container size in pixels
    const cellSize = container / size; // Calculate cell size

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell"); // Add class for styling
        cell.style.width = `${cellSize}px`; 
        cell.style.height = `${cellSize}px`;

        cell.addEventListener("mouseenter", () => {
            if (currentMode === "random") {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`; // Generate random color
                cell.style.backgroundColor = randomColor; 
            } else if (currentMode === "eraser") {
                cell.style.backgroundColor = ""; // Reset to default
            } else if (currentMode === "darken") {
                let darkness = cell.dataset.darkness || 0; // if no darkness, start at 0
                darkness = Math.min(Number(darkness) + 10, 100); // Increase darkness by 10%, max 100%
                cell.dataset.darkness = darkness;
                cell.style.backgroundColor = `rgba(0, 0, 0, ${darkness / 100})`; // Set background to black with opacity
            } else if (currentMode === "black") {
                cell.style.backgroundColor = "black";
            
            }
        });

        gridContainer.appendChild(cell);
    }
}

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