const container = document.querySelector('#container');

const maxSize = 100;
let size = 16;

const refactor = document.querySelector('#refactor');
refactor.addEventListener('click', () => {
    size = prompt("Please enter a new size for the canvas: (max is 100!)");
    removeChildren(container);
    draw(size, maxSize);
});

function draw(size, maxSize) {
    if (maxSize >= size) {
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.setAttribute('style', "display: flex; flex: 1 1 1px; flex-direction: column;");
            for (let j = 0; j < size; j++) {
                const pix = document.createElement('div');
                pix.setAttribute('style', "background-color: white; flex: 1 1 1px;");
                pix.addEventListener(
                    "mouseover",
                    (event) => {
                        event.target.style.backgroundColor = "black";
                    },
                    false
                );
    
                row.appendChild(pix);
            }
            container.appendChild(row);
        }
    }
}

function removeChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

draw(size, maxSize);