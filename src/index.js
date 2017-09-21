import "./styles.css";

import sum from "./sum";
import "./image_viewer";

const header = document.createElement("h1");
header.innerText = sum(2,3);
document.body.appendChild(header);