let accountBalance = 0; // Sets the user account balance to 0 to start.

// A simple deposit function that "Deposits" money into a user account.
let deposit_to_account = () => {

    // Asks for an amount to deposit
    let amountToDeposit = parseFloat(prompt("How Much Money Would You Like To Deposit?"));

    console.log(typeof(amountToWithdraw))
    // Adds the money to the users account and displays the amount deposited.
    if (amountToDeposit == NaN) {
        accountBalance = accountBalance;
    } else {
        accountBalance += amountToDeposit;
        alert(`Successfully Added ${amountToDeposit} To Your Account.`);
    }

    // NOT PART OF EXAMPLE //
    update_money();
}

// A simple withdraw function that "Withdraws" money from a user account.
let withdraw_from_account = () => {

    // Asks for an amount to withdraw
    let amountToWithdraw = parseFloat(prompt("How Much Money Would Youo Like To Withdraw?"));

    console.log(typeof(amountToWithdraw))
    // Removes the money from the users account and displays the amount withdrawn.
    if (amountToWithdraw == NaN) {
        accountBalance = accountBalance;
    } else {
        accountBalance -= amountToWithdraw;
        alert(`Successfully Withdrawn ${amountToWithdraw} From Your Account.`);
    }

    // NOT PART OF EXAMPLE //
    update_money();
}

// NOT PART OF CODE EXAMPLE //
let update_money = () => {
    document.getElementById("money").textContent = accountBalance; // sets the text content of the HTML element with the ID "money" to the amount of money in the users account.
}