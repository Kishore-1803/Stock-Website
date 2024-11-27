var companies = [
    "Apple Inc.",
    "Microsoft Corp.",
    "Amazon.com Inc.",
    "Walt Disney Co.",
    "Alphabet Inc.",
    "Facebook Inc.",
    "Tesla Inc.",
    "Netflix Inc.",
    "PayPal Holdings Inc.",
    "Visa Inc.",
    "Johnson & Johnson",
    "Procter & Gamble Co.",
    "Bank of America Corp.",
    "JPMorgan Chase & Co.",
    "Coca-Cola Co.",
    "Pfizer Inc.",
    "Exxon Mobil Corp.",
    "Walmart Inc.",
    "McDonald's Corp.",
    "Berkshire Hathaway Inc.",
];

var companyIcons = {
    "Apple Inc.": "css/photos/apple-512.png",
    "Microsoft Corp.": "css/photos/Microsoft.png",
    "Amazon.com Inc.": "css/photos/amazon.png",
    "Walt Disney Co.": "css/photos/Disney.png",
    "Alphabet Inc.": "css/photos/Alphabet.png",
    "Facebook Inc.": "css/photos/facebook.png",
    "Tesla Inc.": "css/photos/Tesla.png",
    "Netflix Inc.": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/165px-Netflix_2015_N_logo.svg.png",
    "PayPal Holdings Inc.": "css/photos/paypal.png",
    "Visa Inc.": "css/photos/visa.png",
    "Johnson & Johnson": "css/photos/johnson-and-johnson.png",
    "Procter & Gamble Co.": "css/photos/P&G_logo.png",
    "Bank of America Corp.": "https://1000logos.net/wp-content/uploads/2016/10/Bank-of-America-Emblem-768x432.png",
    "JPMorgan Chase & Co.": "https://www.logotypes101.com/logos/923/6DEF5810419129DB2EF58E97873DA332/jp_morgan_chase.png",
    "Coca-Cola Co.": "css/photos/Coca-Cola.jpeg",
    "Pfizer Inc.": "css/photos/pfizer.png",
    "Exxon Mobil Corp.": "css/photos/exxonmobil.jpg",
    "Walmart Inc.": "css/photos/walmart.png",
    "McDonald's Corp.": "css/photos/mcdonalds.png",
    "Berkshire Hathaway Inc.": "css/photos/Berkshire.jpeg",

};

function randomDate() {
    var start = new Date();
    start.setFullYear(start.getFullYear() - 1); // One year ago
    var end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateNews() {
    var category;
    var title, content;

    var random = Math.random();
    if (random < 0.15) {
        category = "earnings";
    } else if (random < 0.3) {
        category = "mergers";
    } else if (random < 0.4) {
        category = "product-launch";
    } else if (random < 0.5) {
        category = "acquisitions";
    } else if (random < 0.6) {
        category = "partnerships";
    } else if (random < 0.7) {
        category = "expansion";
    } else if (random < 0.8) {
        category = "restructuring";
    } else if (random < 0.9) {
        category = "divestitures";
    } else {
        category = "stock-split";
    }

    var company1 = companies[Math.floor(Math.random() * companies.length)];
    var company2 = companies[Math.floor(Math.random() * companies.length)];

    var date = randomDate().toISOString().slice(0, 10);

    switch (category) {
        case "earnings":
            title = company1 + " reports strong quarterly earnings";
            content = company1 + " reported strong earnings for the quarter, surpassing analysts' expectations...";
            break;
        case "mergers":
            title = company1 + " to acquire " + company2;
            content = company1 + " announced plans to acquire " + company2 + " in a deal...";
            break;
        case "product-launch":
            title = company1 + " announces new product launch";
            content = company1 + " announced the launch of a new product...";
            break;
        case "acquisitions":
            title = company1 + " announces acquisition of " + company2;
            content = company1 + " announced the acquisition of " + company2 + "...";
            break;
        case "partnerships":
            title = company1 + " forms partnership with " + company2;
            content = company1 + " announced a new partnership with " + company2 + "...";
            break;
        case "expansion":
            title = company1 + " announces expansion plans";
            content = company1 + " announced plans for expansion into new markets...";
            break;
        case "restructuring":
            title = company1 + " announces restructuring";
            content = company1 + " announced restructuring plans to optimize operations...";
            break;
        case "divestitures":
            title = company1 + " announces divestiture";
            content = company1 + " announced plans to divest a portion of its assets...";
            break;
        case "stock-split":
            title = company1 + " announces stock split";
            content = company1 + " announced a stock split to increase liquidity...";
            break;
        default:
            title = "Default title";
            content = "Default content";
    }

    var companyIcon = companyIcons[company1];

    return { category: category, company: company1, companyIcon: companyIcon, date: date, title: title, content: content };
}

var newsData = [];
for (var i = 0; i < 100; i++) {
    newsData.push(generateNews());
}

function filterByCategory(category) {
    var filteredNews = newsData.filter(function(news) {
        return category === 'all' || news.category === category;
    });
    displayNews(filteredNews);
}

function filterByCompany(company) {
    var filteredNews = newsData.filter(function(news) {
        return company === 'all' || news.company === company;
    });
    displayNews(filteredNews);
}

function filterByDate() {
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;

    var filteredNews = newsData.filter(function(news) {
        return (!startDate || !endDate) ||
                        (new Date(news.date) >= new Date(startDate) && new Date(news.date) <= new Date(endDate));
    });

    displayNews(filteredNews);
}

function displayNews(newsList) {
    var newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    newsList.forEach(function(news) {
        var newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        var companyIcon = news.companyIcon ? '<div class="news-image"><img src="' + news.companyIcon + '" alt="' + news.company + '"></div>' : '';
        newsItem.innerHTML = '<div class="news-content"><h3>' + news.title + '</h3><p>' + news.content + '</p></div>' + companyIcon;
        newsContainer.appendChild(newsItem);
    });
}
filterByCategory('all');