
    const button = document.getElementById("change-color-btn");
    const textBlock = document.getElementById("text-block");

    button.addEventListener("click", () => {

      if (textBlock.classList.contains("new-color")) {
        textBlock.classList.remove("new-color");
      } else {
        textBlock.classList.add("new-color");
      }
    });