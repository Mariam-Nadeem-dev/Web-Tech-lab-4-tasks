/* FIX 1: defer in task4.html lets us safely select the HTML elements. */

/* FIX 2: The HTML uses id="count", not id="total". */
const count = document.querySelector("#count");

const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");
const message = document.querySelector("#message");

/* FIX 3: Use the number 0, not the string "0". */
let pizzas = 0;

addBtn.addEventListener("click", () => {
    pizzas = pizzas + 1;
    count.textContent = pizzas;

    /* FIX 4: Use === for comparison, not = for assignment. */
    if (pizzas === 10) {
        message.textContent = "Maximum reached!";
    } else {
        message.textContent = "";
    }
});

/* AI FEATURE: Remove one pizza, but never go below 0. */
minusBtn.addEventListener("click", () => {
    // AI: I checked the zero limit and used a condition to prevent negative counts.

    if (pizzas > 0) {
        pizzas = pizzas - 1;
    }

    count.textContent = pizzas;

    if (pizzas < 10) {
        message.textContent = "";
    }
});

/* FIX 5: The event name must be "click". */
resetBtn.addEventListener("click", () => {
    pizzas = 0;
    count.textContent = pizzas;

    /* FIX 6: JavaScript property names are case-sensitive; use textContent. */
    message.textContent = "";
});