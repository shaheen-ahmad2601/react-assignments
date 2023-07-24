document.addEventListener("DOMContentLoaded", function () {
  const draggableCells = document.querySelectorAll("td");

  let draggedCell;

  draggableCells.forEach((cell) => {
    cell.addEventListener("dragstart", function (event) {
      draggedCell = this;
      event.dataTransfer.setData("text/plain", ""); // Necessary for Firefox
    });

    cell.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    cell.addEventListener("drop", function (event) {
      event.preventDefault();
      if (draggedCell !== this) {
        const tempColor = this.className;
        this.className = draggedCell.className;
        draggedCell.className = tempColor;
      }
    });
  });
});
