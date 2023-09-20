let account = 0; // sets account variable

function deposit() {
    let amount = parseFloat(prompt("What Amount Would You Like To Deposit?")); // Asks for amount to deposit
    account += amount;
    console.log(account);
    
    // NOT PART OF THE EXAMPLE //
    update_money();
}

function withdraw() {
    let amount = parseFloat(prompt("What Amount Would You Like To Withdraw?")); // Asks for amount to withdraw
    account -= amount;
    console.log(account);

    // NOT PART OF THE EXAMPLE //
    update_money();
}

// NOT PART OF CODE EXAMPLE //
let update_money = () => {
    document.getElementById("money").textContent = account; // sets the text content of the HTML element with the ID "money" to the amount of money in the users account.
}