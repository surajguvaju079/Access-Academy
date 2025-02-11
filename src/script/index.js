document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "flex" ? "none" : "flex";
  });
});
<<<<<<< HEAD
=======

function handleRead() {
  const read_more = document.querySelector("#read-more");
  console.log("read_more nodes", read_more);
  const button_text = document.querySelector("#button-text span");
  console.log("button text:", button_text);
  if (read_more.style.display === "block") {
    read_more.style.display = "none";
    button_text.innerHTML = "Read More";
  } else {
    read_more.style.display = "block";
    button_text.innerHTML = "Read Less";
  }
}
>>>>>>> c56068fe62aea1fca1235c2c06b0015ed10570b7
