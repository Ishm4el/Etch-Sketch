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
                pix.setAttribute('style', `background-color: white; flex: 1 1 1px;`);
                pix.addEventListener(
                    "mouseenter",
                    (event) => {
                        // console.log(event.target.style.backgroundColor);
                        if (event.target.style.backgroundColor == 'white') {
                            event.target.style.backgroundColor = `rgb(
                                ${Math.floor(Math.random() * 256)},
                                ${Math.floor(Math.random() * 256)},
                                ${Math.floor(Math.random() * 256)}
                            )`;
                        }
                        else {
                            let color = event.target.style.backgroundColor;
                            color = color.substring(4, color.length - 1).replace(/ /g, '').split(',');
                            console.log(color);

                            for (let k = 0; k < 3; k++) {
                                if (color[k] < 26) {
                                    color[k] = 0;
                                }
                                else {
                                    color[k] = Math.floor(color[k] - 25.6);
                                }
                            }

                            event.target.style.backgroundColor = `rgb(
                                ${color[0]},
                                ${color[1]},
                                ${color[2]}
                            )`;
                        }
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