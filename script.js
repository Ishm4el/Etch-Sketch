const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('style', "display: flex; flex: 1 1 1px; flex-direction: column;");
    for (let j = 0; j < 16; j++) {
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