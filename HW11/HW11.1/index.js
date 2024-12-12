
document.addEventListener("DOMContentLoaded", () => {
    const createMultiplicationTable = (size) => {
        const table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.textAlign = "center";

        for (let i = 0; i <= size; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j <= size; j++) {
                const cell = i === 0 || j === 0 ? document.createElement("th") : document.createElement("td");
                cell.style.border = "1px solid black";
                cell.style.padding = "5px";

                if (i === 0 && j === 0) {
                    cell.textContent = "";
                } else if (i === 0) {
                    cell.textContent = j;
                } else if (j === 0) {
                    cell.textContent = i;
                } else {
                    cell.textContent = i * j;
                }
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        return table;
    };

    const container = document.createElement("div");
    container.appendChild(createMultiplicationTable(10));
    document.body.appendChild(container);
});
