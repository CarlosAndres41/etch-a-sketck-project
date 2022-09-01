let numberOfSquares = 50;

let gridSize = numberOfSquares ** 2;

let gridContainer = document.getElementById('grid-container');

for (let i = 0; i < gridSize; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('inner-div');

    let opacity = 0.1;
    gridDiv.addEventListener('mouseover', (event) => {
        opacity += 0.1;
        event.target.style.backgroundColor = 'rgb(199, 251, 43)';
        if (opacity <= 1) {
            event.target.style.opacity = opacity;
        };
    })
    gridContainer.appendChild(gridDiv);

}