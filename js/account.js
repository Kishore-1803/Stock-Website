document.addEventListener('DOMContentLoaded', () => {
    loadAccountInfo();
});

// Function to display account information
function displayAccountInfo(accountInfo) {
    const accountInfoList = document.getElementById('account-info-list');
    accountInfoList.innerHTML = ''; // Clear previous content

    // Loop through account info object
    for (const [key, value] of Object.entries(accountInfo)) {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-key', key);
        listItem.innerHTML = `<strong>${key}:</strong> <span>${value}</span>`;
        accountInfoList.appendChild(listItem);
    }
}

// Function to edit account details
function editAccountDetails() {
    const accountInfoList = document.getElementById('account-info-list');
    const lis = accountInfoList.querySelectorAll('li');

    // Convert only the Name and Email fields to input fields
    lis.forEach(li => {
        const key = li.getAttribute('data-key');
        if (key === 'Name' || key === 'Email') {
            const span = li.querySelector('span');
            const input = document.createElement('input');
            input.value = span.textContent;
            li.innerHTML = `<strong>${key}:</strong>`;
            li.appendChild(input);
        }
    });

    document.getElementById('edit-account-btn').style.display = 'none';
    document.getElementById('save-account-btn').style.display = 'block';
}

// Function to save edited account details
function saveAccountDetails() {
    const accountInfoList = document.getElementById('account-info-list');
    const lis = accountInfoList.querySelectorAll('li');
    const newAccountInfo = {};

    lis.forEach(li => {
        const key = li.getAttribute('data-key');
        if (key === 'Name' || key === 'Email') {
            const input = li.querySelector('input');
            newAccountInfo[key] = input.value;
        } else {
            const span = li.querySelector('span');
            newAccountInfo[key] = span.textContent;
        }
    });

    // Save the updated account info to local storage
    localStorage.setItem('accountInfo', JSON.stringify(newAccountInfo));

    // Display the updated account info
    displayAccountInfo(newAccountInfo);

    document.getElementById('edit-account-btn').style.display = 'block';
    document.getElementById('save-account-btn').style.display = 'none';
}

// Function to generate random account details
function generateRandomAccount() {
    const accountInfo = {
        Name: "John Doe",
        Email: "john.doe@example.com",
        "Account ID": Math.floor(Math.random() * 1000000) // Random account ID
    };

    // Save the generated account info to local storage
    localStorage.setItem('accountInfo', JSON.stringify(accountInfo));

    // Display the generated account info
    displayAccountInfo(accountInfo);
}

// Function to load account information from local storage
function loadAccountInfo() {
    const accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
    if (accountInfo) {
        displayAccountInfo(accountInfo);
    } else {
    generateRandomAccount();
    }
}    

// Event listener for edit account button
document.getElementById('edit-account-btn').addEventListener('click', editAccountDetails);
document.getElementById('save-account-btn').addEventListener('click', saveAccountDetails);
// Data for demonstration
const Items = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'MSFT', 'META', 'TESL', 'NFLX', 'PYPL', 'VISA', 'JPM', 'GS', 'JJ', 'PFE', 'WMT', 'HD', 'NKE', 'MCD', 'BA', 'CAT', 'IBM', 'CSCO', 'INTC', 'ORCL', 'QCOM', 'ADBE', 'CRM', 'NVDA', 'TSM', 'ASML', 'AVGO', 'TXN', 'ADI', 'MU', 'LRCX', 'XLNX', 'CTSH', 'INFY', 'WIT', 'HPE', 'DXC', 'IBM', 'CSCO', 'ORCL', 'SAP', 'ADBE', 'INTU', 'NOW', 'TEAM', 'WDAY', 'ZM', 'SNOW', 'DOCU', 'CRWD', 'NET', 'TWLO', 'OKTA', 'PANW', 'SPLK', 'SUMO', 'DDOG', 'ESTC', 'MDB', 'CRSP', 'EDIT', 'NTLA', 'BEAM', 'CRIS', 'CRNX', 'CRVS', 'CRSP', 'CRVS'];

// Transactions
const transactionTypes = ['Buy', 'Sell', 'Dividend', 'Deposit', 'Withdrawal'];
const transactionBody = document.getElementById('transactionBody');
for (let i = 0; i < 5; i++) {
    const date = new Date().toISOString().slice(0, 10);
    const type = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    const symbol = Items[Math.floor(Math.random() * Items.length)];
    const quantity = Math.floor(Math.random() * 100) + 1;
    const price = (Math.random() * 500).toFixed(2);
    const total = (quantity * price).toFixed(2);
    const row = document.createElement('tr');
    row.innerHTML = `<td>${date}</td><td>${type}</td><td>${symbol}</td><td>${quantity}</td><td>${price}</td><td>${total}</td>`;
    transactionBody.appendChild(row);
}

// Function to display transaction history
function displayTransactionHistory() {
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    const transactionBody = document.getElementById('transactionBody');
    transactionBody.innerHTML = '';
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${transaction.date}</td><td>${transaction.type}</td><td>${transaction.symbol}</td><td>${transaction.quantity}</td><td>${transaction.price.toFixed(2)}</td><td>${transaction.total}</td>`;
        transactionBody.appendChild(row);
    });
}

// Call the displayTransactionHistory function to display transaction history on page load
displayTransactionHistory();

// Function to display portfolio and positions
function displayPortfolioAndPositions() {
    const portfolio = JSON.parse(localStorage.getItem('portfolio') || '{}');
    const positions = JSON.parse(localStorage.getItem('positions') || '[]');
    const portfolioBody = document.getElementById('portfolioBody');
    const positionsBody = document.getElementById('positionsBody');

    // Display portfolio data
    for (const [symbol, data] of Object.entries(portfolio)) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${symbol}</td><td>${data.quantity}</td><td>${data.value.toFixed(2)}</td>`;
        portfolioBody.appendChild(row);
    }

    positions.sort((a, b) => b.quantity - a.quantity);
    // Display positions data
    positions.forEach(position => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${position.symbol}</td><td>${position.quantity}</td><td>${position.avgCost.toFixed(2)}</td><td>${(position.quantity * position.avgCost).toFixed(2)}</td><td></td>`;
        positionsBody.appendChild(row);
    });
}

// Call the displayPortfolioAndPositions function to display portfolio and positions on page load
displayPortfolioAndPositions();



function displayWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    console.log('Retrieved Watchlist:', watchlist); // Log the retrieved watchlist
    const watchlistBody = document.getElementById('watchlistbody');
    watchlistBody.innerHTML = '';
    watchlist.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.symbol}</td><td>${item.price}</td><td><button class="remove-button" onclick="removeFromWatchlist(${index})">Remove</button></td>`;
        watchlistBody.appendChild(row);
    });
}

function removeFromWatchlist(index) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    watchlist.splice(index, 1);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    displayWatchlist();
}

displayWatchlist(); // Update the displayed watchlist after updating prices