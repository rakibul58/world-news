const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => showCategories(data.data.news_category))
    .catch(error => console.log(error));
}

const showCategories = (categories) => {
    const categoriesDiv = document.getElementById('categories');
    categories.forEach(category => {

        const newDiv = document.createElement('a');
        newDiv.innerHTML = `
            <button id="${category.category_id}" onclick="showCategoryNews('${category.category_id}')" class="btn fw-semibold fs-5 text-secondary" > ${ category.category_name } </button>`;
        categoriesDiv.appendChild(newDiv);
        
    });
}

const loadCategoryNews = (categoryId) =>{
    console.log(categoryId);
}

loadCategories();