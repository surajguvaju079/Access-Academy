const date = new Date();

const footer = document.querySelector(".footer");
const span = document.createElement("span");
span.innerHTML = `<div id="copy">&copy 2017-${date.getFullYear()} Access Academy</div>`;
footer.appendChild(span);
