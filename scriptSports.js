const API_KEY = "681bf93be2c44fc2992369f776d7504c";
const row = document.querySelector(".row");

const fetchNews = async text => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}` ;
    const newsData = await fetch(url);
    const news = await newsData.json();
    console.log(news);
    
    let output = "";
    for(let i=1;i<7;i++)
    {
        output += `<div class="container card col-md-3 mt-2 mr-2 mb-2">
        <img class="card-img-top" src="${news.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${news.articles[i].title}</h5>
          <p class="card-text">${news.articles[i].content}</p>
          <p class="card-text"><small class="text-muted">${news.articles[i].author}</small></p>
          <a href="${news.articles[i].url}" target="_blank"><button type="button" class="btn btn-link text-dark font-weight-bold">READ IN DETAIL</button></a>
        </div>
      </div>` ;
      row.innerHTML = output;
    }
};

fetchNews();