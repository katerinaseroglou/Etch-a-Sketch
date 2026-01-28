# 🎨 Etch-a-Sketch

A browser version of something between a sketchpad and an Etch-A-Sketch.
This project was built as part of **The Odin Project – Foundations Course**.

🔗 **Live Demo:** https://katerinaseroglou.github.io/Etch-a-Sketch/ 
📘 **Assignment:** https://www.theodinproject.com/lessons/foundations-etch-a-sketch

---

## 📌 Project Description

This application allows the user to draw on a square grid by hovering the mouse over its cells.  
The grid is dynamically generated based on user's input and multiple drawing modes are available.

The goal of the project is to practice:
- DOM manipulation
- Event handling
- JavaScript logic and state
- Basic layout using Flexbox (without CSS Grid)

---

## 🧠 How It Works

### 1️⃣ Grid Creation
- The user selects a grid size (from 1 to 100).
- A square grid is generated dynamically using JavaScript.
- Each cell is a `<div>` element with calculated width and height so the grid always fits the container.

### 2️⃣ Drawing Interaction
- Drawing happens when the mouse enters a grid cell (`mouseenter` event).
- The behavior depends on the currently selected drawing mode.

### 3️⃣ Drawing Modes

The user can switch between the following modes using on-screen buttons:

#### 🎲 Random Color Mode
- Each hovered cell is filled with a randomly generated RGB color.

#### ⚫ Black Mode
- Cells are filled with solid black color.

#### 🌑 Darken Mode
- Each pass over the same cell increases its darkness by 10%.
- The color gradually transitions from transparent to fully black.

#### 🧽 Eraser Mode
- Removes color from the cell and restores it to its default state.

### 4️⃣ Clear Grid
- A clear button resets all grid cells without changing the grid size.

---

## 🧱 Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

---

## 🗂️ Project Structure
etch-a-sketch/
│
├── index.html
├── style.css
├── script.js
└── README.md
