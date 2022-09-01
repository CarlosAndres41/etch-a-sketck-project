let gridSize = 16 * 16;

let gridContainer = document.getElementById('grid-container');

for (let i = 0; i < gridSize; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('inner-div');
    gridDiv.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';
    })
    gridContainer.appendChild(gridDiv);

}