const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data.news_category))
    .catch(error => console.log(error));
}

const showCategories = (categories) => {
    
}

loadCategories();