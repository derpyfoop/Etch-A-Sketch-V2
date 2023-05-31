const gridCrt = document.getElementById("gridCrt");
const sliderValue = document.getElementById("sliderValue");
const sliderInput = document.getElementById("sliderInput");
const color = document.getElementById("color");
const gridDivClass = document.getElementsByClassName("gridDiv");
const rainbow = document.getElementById("rainbow");
const black = document.getElementById("black");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");

let gridDiv;
let currentValue = 16;
let currentColor = '#000000';

function clearGrid() {
    gridCrt.replaceChildren();
};

function changeColor(colorValue) {
    for (let i = 0; i < gridDivClass.length; i++) {
        gridDivClass[i].addEventListener("click", function() {
            currentColor = colorValue;
            gridDivClass[i].style.backgroundColor = `${currentColor}`;
        })
    }
};

function rainbowMode() {
    for (let i = 0; i < gridDivClass.length; i++) {
        gridDivClass[i].addEventListener("click", function () {
            let maxVal = 0xFFFFFF;
            let randomNumber = Math.random() * maxVal;
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);
            currentColor = '#' + randColor;
            gridDivClass[i].style.backgroundColor = `${currentColor}`;
        });
    }
};

function loadGrid(currentValue) {
    gridCrt.replaceChildren();

    gridCrt.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`;

    for (let i = 0; i < currentValue; i++) {
        for (let j = 0; j < currentValue; j++) {
            gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            gridCrt.appendChild(gridDiv);
        };
    };

    for (let i = 0; i < gridDivClass.length; i++) {
        gridDivClass[i].addEventListener("click", function () {
            gridDivClass[i].style.backgroundColor = `${currentColor}`;
        });
    }
};

function sliderChange(currentValue) {
    sliderValue.innerHTML = currentValue + " x " + currentValue;
}

loadGrid(currentValue);

sliderInput.addEventListener("input", function () {
    currentValue = sliderInput.value;
    loadGrid(currentValue);
    sliderChange(currentValue);
});

color.addEventListener("input", function () {
    changeColor(color.value);
});

rainbow.addEventListener("click", function () {
    rainbowMode();
});

black.addEventListener("click", function() {
    changeColor('#000000');
})

eraser.addEventListener("click", function() {
    changeColor('#FFFFFF');
})

clear.addEventListener("click", function() {
    clearGrid();
    loadGrid(currentValue);
})
