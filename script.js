document.addEventListener("DOMContentLoaded", () => {
    const solveBtn = document.getElementById("solveBtn");
    const clearBtn = document.getElementById("clearBtn");
    const resultDiv = document.getElementById("result");

    solveBtn.addEventListener("click", () => {
        const a = parseFloat(document.getElementById("a").value);
        const b = parseFloat(document.getElementById("b").value);
        const c = parseFloat(document.getElementById("c").value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDiv.textContent = "Please enter valid coefficients.";
        } else {
            solveQuadraticEquation(a, b, c);
        }
    });

    clearBtn.addEventListener("click", () => {
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
        document.getElementById("c").value = "";
        resultDiv.textContent = "";
    });

    function solveQuadraticEquation(a, b, c) {
        const discriminant = b ** 2 - 4 * a * c;

        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultDiv.innerHTML = `Roots: x = <span class="highlight">${root1.toFixed(2)}</span> and x = <span class="highlight">${root2.toFixed(2)}</span>`;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            resultDiv.innerHTML = `Root: x = <span class="highlight">${root.toFixed(2)}</span>`;
        } else {
            resultDiv.textContent = "The equation has no real roots.";
        }
    }
});
