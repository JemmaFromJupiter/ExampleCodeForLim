let a = 0

function dm() {
    let m = prompt("Enter Money")
    a = a + m
    console.log(a)

    // NOT PART OF DEVELOPTING EXAMPLE //
    update_money()
}

function wm() {
    let m = prompt("Enter Money")
    a = a - m
    console.log(a)

    // NOT PART OF DEVELOPTING EXAMPLE //
    update_money()
}

// NOT PART OF CODE EXAMPLE //
let update_money = () => {
    document.getElementById("money").textContent = a; // sets the text content of the HTML element with the ID "money" to the amount of money in the users account.
}