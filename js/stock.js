// Sample data for companies
const companies = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.20, volume: 10000000, marketCap: 2.5, peRatio: 30.5, prices: [150.20], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/135px-Apple_logo_black.svg.png'},
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.50, volume: 1500000, marketCap: 1.8, peRatio: 35.2, prices: [2750.50], logoUrl: 'css/photos/google.png' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3400.00, volume: 5000000, marketCap: 1.6, peRatio: 40.0, prices: [3400.00], logoUrl: 'css/photos/amazon.png' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 750.00, volume: 3000000, marketCap: 1.2, peRatio: 25.0, prices: [750.00], logoUrl: 'css/photos/Tesla.png'},
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 300.10, volume: 2000000, marketCap: 2.2, peRatio: 29.0, prices: [300.10], logoUrl: 'css/photos/Microsoft.png'},
    { symbol: 'META', name: 'Meta Platforms Inc.', price: 350.00, volume: 1500000, marketCap: 1.5, peRatio: 32.5, prices: [350.00], logoUrl: 'css/photos/facebook.png'},
    { symbol: 'NFLX', name: 'Netflix Inc', price: 400.00, volume: 1200000, marketCap: 1.8, peRatio: 28.0, prices: [400.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/165px-Netflix_2015_N_logo.svg.png'},
    { symbol: 'PYPL', name: 'PayPal Holdings Inc.', price: 200.00, volume: 1000000, marketCap: 1.2, peRatio: 25.0, prices: [200.00], logoUrl: 'css/photos/paypal.png'},
    { symbol: 'VISA', name:'Visa Inc.', price: 250.00, volume: 1400000, marketCap: 1.5, peRatio: 30.0, prices: [250.00], logoUrl: 'css/photos/visa.png'},
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 150.00, volume: 1800000, marketCap: 1.8, peRatio: 35.0, prices: [150.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/J_P_Morgan_Chase_Logo_2008_1.svg/428px-J_P_Morgan_Chase_Logo_2008_1.svg.png'},
    { symbol: 'GS', name: 'Goldman Sachs Group', price: 140.00, volume: 17820000, marketCap: 1.9, peRatio: 38.0, prices: [140.00], logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAUVBMVEVzmcb///9tlcRmkcJwl8Vqk8NijsF+oMr7/P3V3+yqv9rr8Pby9fmuwty9zeJ5nciSrtHj6vLE0uWFpcyiutfN2elcir/c5O+atNS1x9+Lqc6vkN19AAACH0lEQVRIie2UW4+kIBCFOXVBVBDRpr38/x+6pe0mM7PjPszLZpOuRIjARxWHo879u5CfQEr5ww7MZ391f8tFbXn0aMQRkZOMoDbGEY0TERUhkmPV2Z4jF8g9vPjQOO6GjsUhWK6hM1DSY60PmaYskrcpqWu2MdXxRUpCUUfDzG3/LAsfIIWagYaAsUWd0XODKWPhESEfpZwHLKhKyjRi8hNGQfADOh9OkAcMHrDJxSYMLM8FDzorjag8WTkTJrbH5m1u9fEE9QLJr/UbUBXYX2A9wPIH2ITyNaMuBppAezpLTQdY8fgMckXKX0ATZ+EDJFQjDlX9io7xCWyR9i+g4wK2UkeaSyoz5RBZpziU0EiMtIWNY5Q5xC32PIbFt2G9btKnvgaTU9TZ5Z7OUe+ffLqHmE4TsQnPNmlrmC7ndCAlA80XdO5l7RwXlpev5M7Gdhol2lbRMXVmdmrSqnbp+zaL0zVt4w1pYBzZZW2jD4G0Q8bUIKymq5aq00Tfg5QAmComkO8xZ7QPtA36Z4vOXryst7XuxdCdpNkC5mRGMoVfoEbE9e77okS8wrYekC3jgGp67BdILXBXqvbsNKHd7XL7I2Nrkm9XqQ9v934DMkY1RcYVyzMeZyyecnuBxfu2v6nVVB22spJEDJaRxjCk4TqjQ02luTmjaZbzYRl6rSCdG32N25Pz/b9HPnhDfrdydT/6+73jHe94xzve8V/HL0kLG9iX3WidAAAAAElFTkSuQmCC'},
    { symbol: 'JJ', name: 'Johnson & Johnson', price: 160.00, volume: 1000000, marketCap: 1.5, peRatio: 32.0, prices: [160.00], logoUrl: 'css/photos/johnson-and-johnson.png'},
    { symbol: 'PFE', name: 'Pfizer Inc.', price: 180.00, volume: 1200000, marketCap: 1.2, peRatio: 28.0, prices: [180.00], logoUrl: 'css/photos/pfizer.png'},
    { symbol: 'WMT', name: 'Walmart Inc.', price: 210.00, volume: 1400000, marketCap: 1.4, peRatio: 33.0, prices: [210.00], logoUrl: 'css/photos/walmart.png'},
    { symbol: 'HD', name: 'The Home Depot Inc.', price: 230.00, volume: 1500000, marketCap: 1.5, peRatio: 35.0, prices: [230.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/270px-TheHomeDepot.svg.png" },
    { symbol: 'NKE', name: 'Nike Inc.', price: 250.00, volume: 1600000, marketCap: 1.6, peRatio: 37.0, prices: [250.00], logoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/300px-Logo_NIKE.svg.png' },
    { symbol: 'MCD', name: 'McDonalds Corp.', price: 270.00, volume: 1700000, marketCap: 1.7, peRatio: 39.0, prices: [270.00], logoUrl: 'css/photos/mcdonalds.png'},
    { symbol: 'BA', name: 'Boeing Co.', price: 290.00, volume: 1800000, marketCap: 1.8, peRatio: 41.0, prices: [290.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Boeing_full_logo.svg/375px-Boeing_full_logo.svg.png'},
    { symbol: 'IBM', name: 'IBM Corp.', price: 330.00, volume: 2000000, marketCap: 2.0, peRatio: 45.0, prices: [330.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/300px-IBM_logo.svg.png' },
    { symbol: 'CAT', name: 'Caterpillar Inc.', price: 310.00, volume: 1900000, marketCap: 1.9, peRatio: 43.0, prices: [310.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Caterpillar_logo.svg/375px-Caterpillar_logo.svg.png'},
    { symbol: 'CSCO', name: 'Cisco Systems Inc.', price: 350.00, volume: 2100000, marketCap: 2.1, peRatio: 47.0, prices: [350.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/330px-Cisco_logo_blue_2016.svg.png' },
    { symbol: 'INTC', name: 'Intel Corp.', price: 370.00, volume: 2200000, marketCap: 2.2, peRatio: 49.0, prices: [370.00], logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/300px-Intel_logo_2023.svg.png' },
    { symbol: 'ORCL', name: 'Oracle Corp.', price: 390.00, volume: 2300000, marketCap: 2.3, peRatio: 51.0, prices: [390.00], logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/375px-Oracle_logo.svg.png" },
    { symbol: 'QCOM', name: 'Qualcomm Inc.', price: 410.00, volume: 2400000, marketCap: 2.4, peRatio: 53.0, prices: [410.00], logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/375px-Qualcomm-Logo.svg.png" },
    { symbol: 'ADBE', name: 'Adobe Inc.', price: 430.00, volume: 2500000, marketCap: 2.5, peRatio: 55.0, prices: [430.00], logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/360px-Adobe_Corporate_logo.svg.png" },
    { symbol: 'CRM', name: 'Salesforce.com Inc.', price: 450.00, volume: 2600000, marketCap: 2.6, peRatio: 57.0, prices: [450.00], logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/330px-Salesforce.com_logo.svg.png" },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 470.00, volume: 2700000, marketCap: 2.7, peRatio: 59.0, prices: [470.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/390px-NVIDIA_logo.svg.png" },
    { symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co.', price: 510.00, volume: 2900000, marketCap: 2.9, peRatio: 63.0, prices: [510.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Taiwan_Semiconductor_logo.jpg/330px-Taiwan_Semiconductor_logo.jpg" },
    { symbol: 'ASML', name: 'ASML Holding NV', price: 530.00, volume: 3000000, marketCap: 3.0, peRatio: 65.0, prices: [530.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/ASML_Holding_N.V._logo.svg/330px-ASML_Holding_N.V._logo.svg.png" },
    { symbol: 'AVGO', name: 'Broadcom Inc.', price: 550.00, volume: 3100000, marketCap: 3.1, peRatio: 67.0, prices: [550.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Broadcom_Ltd_Logo.svg/405px-Broadcom_Ltd_Logo.svg.png" },
    { symbol: 'TXN', name: 'Texas Instruments Inc.', price: 570.00, volume: 3200000, marketCap: 3.2, peRatio: 69.0, prices: [570.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/TexasInstruments-Logo.svg/330px-TexasInstruments-Logo.svg.png" },
    { symbol: 'ADI', name: 'Analog Devices Inc.', price: 590.00, volume: 3300000, marketCap: 3.3, peRatio: 71.0, prices: [590.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Analog_Devices_Logo.svg/300px-Analog_Devices_Logo.svg.png" },
    { symbol: 'MU', name: 'Micron Technology Inc.', price: 610.00, volume: 3400000, marketCap: 3.4, peRatio: 73.0, prices: [610.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Micron_Technology_logo.svg/375px-Micron_Technology_logo.svg.png" },
    { symbol: 'LRCX', name: 'Lam Research Corp.', price: 630.00, volume: 3500000, marketCap: 3.5, peRatio: 75.0, prices: [630.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lam_Research_logo.svg/255px-Lam_Research_logo.svg.png" },
    { symbol: 'XLNX', name: 'Xilinx Inc.', price: 650.00, volume: 3600000, marketCap: 3.6, peRatio: 77.0, prices: [650.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/AMD_Xilinx_logo.svg/330px-AMD_Xilinx_logo.svg.png" },
    { symbol: 'CTSH', name: 'Cognizant Technology Solutions Corp.', price: 670.00, volume: 3700000, marketCap: 3.7, peRatio: 79.0, prices: [670.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/330px-Cognizant_logo_2022.svg.png" },
    { symbol: 'INFY', name: 'Infosys Ltd.', price: 690.00, volume: 3800000, marketCap: 3.8, peRatio: 81.0, prices: [690.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/300px-Infosys_logo.svg.png" },
    { symbol: 'WIT', name: 'Wipro Ltd.', price: 710.00, volume: 3900000, marketCap: 3.9, peRatio: 83.0, prices: [710.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/330px-Wipro_Primary_Logo_Color_RGB.svg.png" },
    { symbol: 'HPE', name: 'Hewlett Packard Enterprise Co.', price: 730.00, volume: 4000000, marketCap: 4.0, peRatio: 85.0, prices: [730.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/218px-HP_logo_2012.svg.png" },
    { symbol: 'DXC', name: 'DXC Technology Co.', price: 750.00, volume: 4100000, marketCap: 4.1, peRatio: 87.0, prices: [750.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/DXC_Technology_logo_%282021%29.svg/270px-DXC_Technology_logo_%282021%29.svg.png" },
    { symbol: 'SAP', name: 'SAP SE', price: 830.00, volume: 4500000, marketCap: 4.5, peRatio: 95.0, prices: [830.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/330px-SAP_2011_logo.svg.png" },
    { symbol: 'TEAM', name: 'Atlassian Corp.', price: 910.00, volume: 4900000, marketCap: 4.9, peRatio: 103.0, prices: [910.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Atlassian.svg/330px-Atlassian.svg.png" },
    { symbol: 'WDAY', name: 'Workday Inc.', price: 930.00, volume: 5000000, marketCap: 5.0, peRatio: 105.0, prices: [930.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Workday_logo.svg/330px-Workday_logo.svg.png" },
    { symbol: 'ZM', name: 'Zoom Video Communications Inc.', price: 950.00, volume: 5100000, marketCap: 5.1, peRatio: 107.0, prices: [950.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/330px-Zoom_Logo_2022.svg.png" },
    { symbol: 'SNOW', name: 'Snowflake Inc.', price: 970.00, volume: 5200000, marketCap: 5.2, peRatio: 109.0, prices: [970.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/330px-Snowflake_Logo.svg.png" },
    { symbol: 'DOCU', name: 'DocuSign Inc.', price: 990.00, volume: 5300000, marketCap: 5.3, peRatio: 111.0, prices: [990.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Docusign_Full_Color.svg/330px-Docusign_Full_Color.svg.png" },
    { symbol: 'CRWD', name: 'CrowdStrike Holdings Inc.', price: 1010.00, volume: 5400000, marketCap: 5.4, peRatio: 113.0, prices: [1010.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/CrowdStrike_logo.svg/330px-CrowdStrike_logo.svg.png" },
    { symbol: 'NET', name: 'Cloudflare Inc.', price: 1030.00, volume: 5500000, marketCap: 5.5, peRatio: 115.0, prices: [1030.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/330px-Cloudflare_Logo.svg.png" },
    { symbol: 'TWLO', name: 'Twilio Inc.', price: 1050.00, volume: 5600000, marketCap: 5.6, peRatio: 117.0, prices: [1050.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/330px-Twilio-logo-red.svg.png" },
    { symbol: 'OKTA', name: 'Okta Inc.', price: 1070.00, volume: 5700000, marketCap: 5.7, peRatio: 119.0, prices: [1070.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Okta_logo_%282023%29.svg/330px-Okta_logo_%282023%29.svg.png" },
    { symbol: 'PANW', name: 'Palo Alto Networks Inc.', price: 1090.00, volume: 5800000, marketCap: 5.8, peRatio: 121.0, prices: [1090.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/PaloAltoNetworks_2020_Logo.svg/330px-PaloAltoNetworks_2020_Logo.svg.png" },
    { symbol: 'SPLK', name: 'Splunk Inc.', price: 1110.00, volume: 5900000, marketCap: 5.9, peRatio: 123.0, prices: [1110.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Splunk_logo.svg/330px-Splunk_logo.svg.png" },
    { symbol: 'SUMO', name: 'Sumo Logic Inc.', price: 1130.00, volume: 6000000, marketCap: 6.0, peRatio: 125.0, prices: [1130.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Sumo_Logic_Logo.svg/330px-Sumo_Logic_Logo.svg.png" },
    { symbol: 'DDOG', name: 'Datadog Inc.', price: 1150.00, volume: 6100000, marketCap: 6.1, peRatio: 127.0, prices: [1150.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Datadog_logo.svg/330px-Datadog_logo.svg.png" },
    { symbol: 'ESTC', name: 'Elastic NV', price: 1170.00, volume: 6200000, marketCap: 6.2, peRatio: 129.0, prices: [1170.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Elastic_NV_logo.svg/330px-Elastic_NV_logo.svg.png" },
    { symbol: 'MDB', name: 'MongoDB Inc.', price: 1190.00, volume: 6300000, marketCap: 6.3, peRatio: 131.0, prices: [1190.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/375px-MongoDB_Fores-Green.svg.png" },
    { symbol: 'CRSP', name: 'CRISPR Therapeutics AG', price: 1210.00, volume: 6400000, marketCap: 6.4, peRatio: 133.0, prices: [1210.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/4/43/CRISPR_Therapeutics_logo.svg/300px-CRISPR_Therapeutics_logo.svg.png" },
    { symbol: 'EDIT', name: 'Editas Medicine Inc.', price: 1230.00, volume: 6500000, marketCap: 6.5, peRatio: 135.0, prices: [1230.00], logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Editas_Medicine_logo.png/330px-Editas_Medicine_logo.png" },
    { symbol: 'NTLA', name: 'Intellia Therapeutics Inc.', price: 1250.00, volume: 6600000, marketCap: 6.6, peRatio: 137.0, prices: [1250.00], logoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Intellia_Therapeutics_Logo.svg/330px-Intellia_Therapeutics_Logo.svg.png" },
    { symbol: 'BEAM', name: 'Beam Therapeutics Inc.', price: 1270.00, volume: 6700000, marketCap: 6.7, peRatio: 139.0, prices: [1270.00], logoUrl:"https://beamtx.com/images/logo.svg" },
    { symbol: 'CRIS', name: 'Curis Inc.', price: 1290.00, volume: 6800000, marketCap: 6.8, peRatio: 141.0, prices: [1290.00], logoUrl:"css/photos/curis.png" },
    { symbol: 'CRNX', name: 'Crinetics Pharmaceuticals Inc.', price: 1310.00, volume: 6900000, marketCap: 6.9, peRatio: 143.0, prices: [1310.00], logoUrl:"https://crinetics.com/wp-content/uploads/2020/09/Crinetics_Logo-full.png" },
    { symbol: 'CRVS', name: 'Corvus Pharmaceuticals Inc.', price: 1330.00, volume: 7000000, marketCap: 7.0, peRatio: 145.0, prices: [1330.00], logoUrl:"https://www.corvuspharma.com/themes/default/images/logo_color.svg"},
];

// Function to update stock prices randomly
function updateStockPrices() {
    companies.forEach(company => {
        const priceChange = (Math.random() * 2 - 1).toFixed(2); // Random change between -1 and +1
        const newPrice = parseFloat((company.price + parseFloat(priceChange)).toFixed(2));
        const priceDiff = newPrice - company.price;
        company.price = newPrice;
        company.prices.push(company.price);
        company.priceDiff = priceDiff;
    });
}


// Function to display the company list
function displayCompanyList() {
    const companyList = document.getElementById('company-list');
    companyList.innerHTML = '';
    companies.forEach(company => {
        const listItem = document.createElement('li');
        const priceClass = company.priceDiff > 0 ? 'increase' : 'decrease';
        listItem.innerHTML = ` <img src="${company.logoUrl}" alt="${company.name} logo" class="company-logo"> ${company.name} (${company.symbol})  <span class="price ${priceClass}">$${company.price.toFixed(2)}</span>`;
        listItem.addEventListener('click', () => {
            displayStockInfo(company);
        });
        companyList.appendChild(listItem);
    });
}

// Function to display stock information
function displayStockInfo(company) {
    document.getElementById('stock-symbol').textContent = company.symbol;
    document.getElementById('stock-company').textContent = company.name;
    document.getElementById('stock-price').textContent = company.price.toFixed(2);
    document.getElementById('stock-volume').textContent = company.volume.toLocaleString();
    document.getElementById('stock-market-cap').textContent = company.marketCap.toLocaleString() + ' trillion';
    document.getElementById('stock-pe-ratio').textContent = company.peRatio;

    window.scrollTo(0,document.body.scrollHeight);
    // Update the chart with new data
    updateChart(historicalChart, company.prices);
}

// Function to update the chart with new data
function updateChart(chart, prices) {
    chart.data.datasets[0].data = prices;
    chart.data.labels = prices.map((_, index) => index + 1);
    chart.update();
}


// Initialize Chart.js for historical price chart
const ctx = document.getElementById('historical-chart').getContext('2d');
const historicalChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Stock Price',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                display: false // Hide x-axis labels
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

// Initial display of company list
displayCompanyList();

// Update stock prices every second
setInterval(() => {
    updateStockPrices();
    displayCompanyList();

    // Update the chart if a company is selected
    const selectedCompanySymbol = document.getElementById('stock-symbol').textContent;
    if (selectedCompanySymbol) {
        const selectedCompany = companies.find(company => company.symbol === selectedCompanySymbol);
        if (selectedCompany) {
            updateChart(historicalChart, selectedCompany.prices);
        }
    }
}, 1000);

// Function to update portfolio and positions data
function updatePortfolioAndPositions(company, quantity, type) {
    const portfolio = JSON.parse(localStorage.getItem('portfolio') || '{}');
    const positions = JSON.parse(localStorage.getItem('positions') || '[]');
    const existingPositionIndex = positions.findIndex(pos => pos.symbol === company.symbol);
    if (!portfolio[company.symbol]) {
        portfolio[company.symbol] = { quantity: 0, value: 0 };
    }
    if (type === 'Buy') {
        portfolio[company.symbol].quantity += quantity;
        portfolio[company.symbol].value += quantity * company.price;
    } else if (type === 'Sell') {
        portfolio[company.symbol].quantity -= quantity;
        portfolio[company.symbol].value -= quantity * company.price;
    }
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
    if (existingPositionIndex === -1) {
        positions.push({ symbol: company.symbol, quantity, avgCost: company.price });
    } else {
        const newPosition = positions[existingPositionIndex];
        const totalQuantity = newPosition.quantity + (type === 'Buy' ? quantity : -quantity);
        const newAvgCost = ((newPosition.avgCost * newPosition.quantity) + (quantity * company.price)) / totalQuantity;
        newPosition.quantity = totalQuantity;
        newPosition.avgCost = newAvgCost;
        positions[existingPositionIndex] = newPosition;
    }
    localStorage.setItem('positions', JSON.stringify(positions));
}

// Buy button functionality
const buyButton = document.querySelector('.buy');
buyButton.addEventListener('click', () => {
    const selectedCompanySymbol = document.getElementById('stock-symbol').textContent;
    const selectedCompany = companies.find(company => company.symbol === selectedCompanySymbol);
    const quantity = prompt(`How many shares of ${selectedCompany.name} (${selectedCompany.symbol}) do you want to buy?`);
    if (quantity) {
        const totalPrice = parseFloat(quantity) * selectedCompany.price;
        const confirmation = confirm(`You are about to buy ${quantity} shares of ${selectedCompany.name} for $${totalPrice.toFixed(2)}. Confirm?`);
        if (confirmation) {
            updatePortfolioAndPositions(selectedCompany, parseInt(quantity), 'Buy');
            const transaction = {
                date: new Date().toISOString().slice(0, 10),
                type: 'Buy',
                symbol: selectedCompany.symbol,
                quantity: parseInt(quantity),
                price: selectedCompany.price,
                total: totalPrice
            };
            const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
            transactions.push(transaction);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            alert(`Bought ${quantity} shares of ${selectedCompany.name}`);
        }
    }
});

// Sell button functionality
const sellButton = document.querySelector('.sell');
sellButton.addEventListener('click', () => {
    const selectedCompanySymbol = document.getElementById('stock-symbol').textContent;
    const selectedCompany = companies.find(company => company.symbol === selectedCompanySymbol);
    const quantity = prompt(`How many shares of ${selectedCompany.name} (${selectedCompany.symbol}) do you want to sell?`);
    if (quantity) {
        const totalPrice = parseFloat(quantity) * selectedCompany.price;
        const confirmation = confirm(`You are about to sell ${quantity} shares of ${selectedCompany.name} for $${totalPrice.toFixed(2)}. Confirm?`);
        if (confirmation) {
            updatePortfolioAndPositions(selectedCompany, parseInt(quantity), 'Sell');
            const transaction = {
                date: new Date().toISOString().slice(0, 10),
                type: 'Sell',
                symbol: selectedCompany.symbol,
                quantity: parseInt(quantity),
                price: selectedCompany.price,
                total: totalPrice
            };
            const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
            transactions.push(transaction);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            alert(`Sold ${quantity} shares of ${selectedCompany.name}`);
        }
    }
});

function updateWatchStockPrices() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    watchlist.forEach(item => {
        const priceChange = (Math.random() * 2 - 1).toFixed(2); // Random change between -1 and +1
        const newPrice = parseFloat((item.price + parseFloat(priceChange)).toFixed(2));
        const priceDiff = newPrice - item.price;
        item.price = newPrice;
        item.priceDiff = priceDiff;
    });
    localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Update the watchlist in localStorage
}

setInterval(() => {
    updateWatchStockPrices();
}, 1000); // Update stock prices every 1 second

// Function to add company to watchlist
const watchlistButton = document.querySelector('.watchlist');
watchlistButton.addEventListener('click', () => {
    const selectedCompanySymbol = document.getElementById('stock-symbol').textContent;
    const selectedCompany = companies.find(company => company.symbol === selectedCompanySymbol);
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    if (!watchlist.find(item => item.symbol === selectedCompany.symbol)) {
        watchlist.push({ symbol: selectedCompany.symbol, price: selectedCompany.price });
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        console.log(`${selectedCompany.name} added to watchlist.`);
        console.log('Updated Watchlist:', watchlist); // Log the updated watchlist
        alert(`${selectedCompany.name} added to watchlist.`);
    } else {
        alert(`${selectedCompany.name} is already in your watchlist.`);
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;
    searchStock(query);
});

function searchStock(query) {
    const result = companies.find(company => company.symbol === query.toUpperCase() || company.name.toLowerCase().includes(query.toLowerCase()));
    if (result) {
        displayStockInfo(result);
        //scroll to bottom
        window.scrollTo(0,document.body.scrollHeight);
    } else {
        alert('Stock company not found.');
    }
}


