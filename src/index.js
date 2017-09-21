import "./styles.css";

import sum from "./sum";

const header = document.createElement("h1");
header.innerText = sum(2,3);
document.body.appendChild(header);


const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', () => {
    System.import('./image_viewer')
        .then(module => {
            console.log(module);
        });
});

document.body.appendChild(button);