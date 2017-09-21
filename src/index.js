import sum from "./sum";
import "./styles.css";

const header = document.createElement("h1");
header.innerText = sum(2,3);
document.body.appendChild(header);