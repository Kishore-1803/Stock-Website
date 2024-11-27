function generateRandomData() {
    const majorIndices = ['S&P 500', 'Dow Jones', 'NASDAQ', 'FTSE 100', 'DAX', 'NIKKEI 225'];
    const randomMajorIndices = majorIndices.map(index => {
        return {
            index: index,
            value: Math.floor(Math.random() * 10000) + 1000
        };
    });

    const topGainers = [];
    for (let i = 1; i <= 5; i++) {
        topGainers.push({
            symbol: 'Gainer ' + i,
            change: '+' + (Math.random() * 10).toFixed(2) + '%'
        });
    }

    const topLosers = [];
    for (let i = 1; i <= 5; i++) {
        topLosers.push({
            symbol: 'Loser ' + i,
            change: '-' + (Math.random() * 10).toFixed(2) + '%'
        });
    }

    const activeStocks = [];
    for (let i = 1; i <= 5; i++) {
        activeStocks.push({
            symbol: 'Stock ' + i,
            volume: Math.floor(Math.random() * 1000000)
        });
    }

    return {
        majorIndices: randomMajorIndices,
        topGainers: topGainers,
        topLosers: topLosers,
        activeStocks: activeStocks
    };
}

function displayData(data) {
    const majorIndicesList = document.getElementById('major-indices-list');
    majorIndicesList.innerHTML = '';
    data.majorIndices.forEach(index => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index.index}: ${index.value}`;
        majorIndicesList.appendChild(listItem);
    });

    const topGainersList = document.getElementById('top-gainers-list');
    topGainersList.innerHTML = '';
    data.topGainers.forEach(gainer => {
        const listItem = document.createElement('li');
        listItem.classList.add('green');
        listItem.textContent = `${gainer.symbol}: ${gainer.change}`;
        topGainersList.appendChild(listItem);
    });

    const topLosersList = document.getElementById('top-losers-list');
    topLosersList.innerHTML = '';
    data.topLosers.forEach(loser => {
        const listItem = document.createElement('li');
        listItem.classList.add('red');
        listItem.textContent = `${loser.symbol}: ${loser.change}`;
        topLosersList.appendChild(listItem);
    });

    const activeStocksList = document.getElementById('active-stocks-list');
    activeStocksList.innerHTML = '';
    data.activeStocks.forEach(stock => {
        const listItem = document.createElement('li');
        if (stock.volume > 500000) {
            listItem.classList.add('green');
        } else {
            listItem.classList.add('red');
        }
        listItem.textContent = `${stock.symbol}: Volume - ${stock.volume}`;
        activeStocksList.appendChild(listItem);
    });
}

setInterval(() => {
    const randomData = generateRandomData();
    displayData(randomData);
}, 1000);
