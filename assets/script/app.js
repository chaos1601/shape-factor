'use strict';

import { Shape } from './Shape.js';

const shapeSelect = document.getElementById('shapeSelect');
const colorSelect = document.getElementById('colorSelect');
const grid = document.querySelector('.grid');
const createButton = document.querySelector('button');

createButton.addEventListener('click', createShape);

function createShape() {
    const selectedShape = shapeSelect.value;
    const selectedColor = colorSelect.value;

    const newShape = new Shape(selectedShape, selectedColor);

    const newShapeElement = document.createElement('div');
    newShapeElement.style.width = '50px';
    newShapeElement.style.height = '50px';

    if (selectedShape === 'circle') {
        newShapeElement.classList.add('circle');
        newShapeElement.style.borderColor = selectedColor;
    } else if (selectedShape === 'square') {
        newShapeElement.classList.add('square');
        newShapeElement.style.backgroundColor = selectedColor;
    }

    newShapeElement.onclick = function () {
        alert(newShape.getInfo());
    };

    grid.appendChild(newShapeElement);
}