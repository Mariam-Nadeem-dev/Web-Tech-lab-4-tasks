function tipAmount(bill, percent) {
    return bill * percent / 100;
}

function splitBill(bill, people, percent) {
    if (bill <= 0 || people < 1) {
        return "Invalid input";
    }

    const tip = tipAmount(bill, percent);
    const total = bill + tip;

    return total / people;
}

function tipRating(percent) {
    if (percent < 10) {
        return "Low";
    } else if (percent <= 20) {
        return "Standard";
    } else {
        return "Generous";
    }
}

function summary(bill, people, percent) {
    const share = splitBill(bill, people, percent);

    if (share === "Invalid input") {
        return "Invalid input";
    }

    const rating = tipRating(percent);

    return `${people} people pay Rs ${share} each (${rating} tip).`;
}

const testBill = 3000;
const testPeople = 3;
const testPercent = 10;

console.log(tipAmount(2000, 10));
console.log(splitBill(testBill, testPeople, testPercent));
console.log(tipRating(5));
console.log(tipRating(15));
console.log(tipRating(25));
console.log(summary(testBill, testPeople, testPercent));
console.log(splitBill(0, 3, 10));
console.log(summary(3000, 0, 10));

const billInput = document.getElementById("bill");
const percentInput = document.getElementById("percent");
const peopleInput = document.getElementById("people");
const calculateBtn = document.getElementById("calculateBtn");
const results = document.getElementById("results");

calculateBtn.addEventListener("click", function () {
    const bill = Number(billInput.value);
    const percent = Number(percentInput.value);
    const people = Number(peopleInput.value);

    if (
        billInput.value.trim() === "" ||
        percentInput.value.trim() === "" ||
        peopleInput.value.trim() === "" ||
        !Number.isFinite(bill) ||
        !Number.isFinite(percent) ||
        !Number.isFinite(people) ||
        bill <= 0 ||
        percent < 0 ||
        people < 1 ||
        !Number.isInteger(people)
    ) {
        alert("Please enter a valid bill, non-negative tip, and whole number of people.");
        results.hidden = true;
        return;
    }

    const tip = tipAmount(bill, percent);
    const share = splitBill(bill, people, percent);
    const rating = tipRating(percent);
    const total = bill + tip;

    document.getElementById("tipResult").textContent =
        "Rs " + tip.toFixed(2);

    document.getElementById("totalResult").textContent =
        "Rs " + total.toFixed(2);

    document.getElementById("splitResult").textContent =
        "Rs " + share.toFixed(2);

    document.getElementById("ratingResult").textContent = rating;
    document.getElementById("message").textContent =
        summary(bill, people, percent);

    results.hidden = false;
});