document
  .querySelector("#userInput")
  .addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      const userInput = document.querySelector("#userInput").value;

      const ul = document.getElementById("list");
      const newLi = document.createElement("li");

      const text = document.createTextNode(userInput);
      newLi.appendChild(text);
      ul.appendChild(newLi);

      document.getElementById("userInput").value = "";

      newLi.addEventListener("click", function () {
        newLi.style.textDecoration = "line-through";
      });
      document.querySelector("#eraser").addEventListener("click", () => {
        newLi.remove();
      });
    }
  });
