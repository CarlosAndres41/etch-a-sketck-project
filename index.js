let gridContainer = document.getElementById('grid-container');

let btn = document.querySelector('.btn');
btn.onclick = function () {
    let value = parseInt(prompt('Set the grid size', 'Write a number between 2 and 100'));
    switch (true) {
        case (value < 2 || value > 100):
            alert('Please enter a value between 2 and 100');
            break;
        default:
            setGrid(value);
            gridContainer.style.borderColor = 'rgb(199, 251, 43)';
            btn.hidden = true;
            break;
    };

};

function setGrid(num) {
    let numberOfSquares = num;
    let gridSize = numberOfSquares ** 2;

    for (let i = 0; i < gridSize; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('inner-div');
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfSquares}, auto)`

        let opacity = 0.1;
        gridDiv.addEventListener('mouseover', (event) => {
            opacity += 0.1;
            event.target.style.backgroundColor = 'rgb(199, 251, 43)';
            if (opacity <= 1) {
                event.target.style.opacity = opacity;
            };
        })
        gridContainer.appendChild(gridDiv);
    };
};

