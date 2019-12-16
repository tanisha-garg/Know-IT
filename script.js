const form = document.querySelector("#myForm");
const API_KEY = "681bf93be2c44fc2992369f776d7504c";
const serchRes = document.querySelector("#searchRes");
const row = document.querySelector(".search-result");
const disableForm = document.querySelector("#truthInput");
disableForm.disabled = true;
//serchRes.style.display = "none";

form.addEventListener("submit", e => {
  e.preventDefault();
  const input = document.querySelector("#dataInput");
  fetchNews(input.value);
  const elmnt =document.querySelector("#news-output-id");
  elmnt.scrollIntoView();
  const clearAllButton = document.querySelector(".clear-all");
});

const fetchNews = async text => {
  const url = `https://newsapi.org/v2/everything?q=${text}&from=2019-11-15&sortBy=publishedAt&apiKey=${API_KEY}`;
  const newsData = await fetch(url);
  const news = await newsData.json();
  console.log(news);

  let output = "";
  for (let i = 1; i < 5; i++) {
    output += `<div class="card col-md-3 mt-2 mr-2 mb-2">
        <img class="card-img-top" src="${news.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${news.articles[i].title}</h5>
          <p class="card-text">${news.articles[i].content}</p>
          <p class="card-text"><small class="text-muted">${news.articles[i].author}</small></p>
          <a href="${news.articles[i].url}" target="_blank"><button type="button" class="btn btn-link text-dark font-weight-bold">READ IN DETAIL</button></a>
        </div>
      </div>`;
    row.innerHTML = output;
  }
};
