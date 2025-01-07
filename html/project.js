// Get stored transactions from localStorage (if any)
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Update the displayed balance and past transactions
function updateDisplay() {
    // Calculate the total income and expenses
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.forEach(transaction => {
        totalIncome += transaction.income;
        totalExpense += transaction.expense;
    });

    // Calculate balance
    let balance = totalIncome - totalExpense;
    document.getElementById('balance').innerText = `Balance: $${balance.toFixed(2)}`;

    // Display the status
    let status = 'Neutral';
    if (balance > 0) {
        status = 'Surplus';
    } else if (balance < 0) {
        status = 'Deficit';
    }
    document.getElementById('status').innerText = `Status: ${status}`;

    // Update the transactions table
    const transactionsTable = document.getElementById('transactions-table').getElementsByTagName('tbody')[0];
    transactionsTable.innerHTML = ''; // Clear existing rows
    transactions.forEach(transaction => {
        const row = transactionsTable.insertRow();
        row.insertCell(0).innerText = transaction.income;
        row.insertCell(1).innerText = transaction.expense;
        row.insertCell(2).innerText = transaction.category;
    });
}

// Add income and expense to the local storage
function calculateBalance() {
    let income = parseFloat(document.getElementById('income').value);
    let expense = parseFloat(document.getElementById('expense').value);
    let category = document.getElementById('category').value;

    // Validate inputs
    if (isNaN(income) || isNaN(expense)) {
        alert("Please enter valid numbers for income and expense.");
        return;
    }

    // Add new transaction to the array
    transactions.push({ income, expense, category });

    // Store updated transactions in localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Update the displayed results and table
    updateDisplay();
}

// Initialize the display when the page loads
window.onload = updateDisplay;
