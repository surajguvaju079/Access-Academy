const engineeringbtn = document.querySelector(".engineering");
const managementbtn = document.querySelector(".management");
const class10 = document.querySelector(".class10-note");
const engineeringSem = document.querySelector(".engineeringSem");
const nothingtoshow = document.querySelector(".nothingtoshow");
const greetings = document.querySelector(".greetings");
const desc_note = document.querySelector(".desc-note");
const moblie_desc_note = document.querySelector(".mbl");
const sidebarNotebtn = document.querySelector(".sidebarNote");
engineeringbtn.addEventListener("click", () => {
    class10.classList.remove("addedContent-box");
    engineeringSem.classList.add("addedContent-box");
    nothingtoshow.style.display = "none";
    greetings.style.display = "none";
    desc_note.style.display = "none";
    moblie_desc_note.style.display = "none";//select to
    class10.style.display = "none";
    engineeringSem.style.display = "flex";
})
managementbtn.addEventListener("click", () => {
    class10.classList.add("addedContent-box");
    nothingtoshow.style.display = "none";//homepage
    greetings.style.display = "none";//welcome to notes
    desc_note.style.display = "none";//select to
    engineeringSem.style.display = "none";//class 12 grid
    moblie_desc_note.style.display = "none";//select to
    class10.style.display = "flex";
    engineeringSem.classList.remove("addedContent-box");
})
sidebarNotebtn.addEventListener("click", () => {
    engineeringSem.classList.remove("addedContent-box");
    class10.classList.remove("addedContent-box");
    nothingtoshow.style.display = "block";//homepage
    greetings.style.display = "block";//welcome to notes
    desc_note.style.display = "block";//select to
    moblie_desc_note.style.display = "none";//select to
    engineeringSem.style.display = "none";//class 12 grid
    class10.style.display = "none";
})
const selectoptions = document.querySelector(".selectoptions");
selectoptions.addEventListener("change", (e) => {
    if (e.target.value == "noteHome") {
        engineeringSem.classList.remove("addedContent-box");
        class10.classList.remove("addedContent-box");
        nothingtoshow.style.display = "block";//homepage
        greetings.style.display = "block";//welcome to notes
        moblie_desc_note.style.display = "block";//select to
        engineeringSem.style.display = "none";//class 12 grid
        class10.style.display = "none";
        desc_note.style.display = "none";//select to
    } else if (e.target.value == "class10") {
        class10.classList.add("addedContent-box");
        nothingtoshow.style.display = "none";//homepage
        greetings.style.display = "none";//welcome to notes
        engineeringSem.style.display = "none";//class 12 grid
        moblie_desc_note.style.display = "none";//select to
        desc_note.style.display = "none";
        class10.style.display = "flex";
        engineeringSem.classList.remove("addedContent-box");
    } else {
        class10.classList.remove("addedContent-box");
        engineeringSem.classList.add("addedContent-box");
        nothingtoshow.style.display = "none";
        greetings.style.display = "none";
        moblie_desc_note.style.display = "none";
        desc_note.style.display = "none";
        class10.style.display = "none";
        engineeringSem.style.display = "flex";
    }
})