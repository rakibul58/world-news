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
            <button id="${category.category_id}" onclick="loadCategoryNews('${category.category_id}')" class="btn fw-semibold fs-5 text-secondary my-btn" > ${ category.category_name } </button>`;
        categoriesDiv.appendChild(newDiv);
        
    });
    const buttons = document.getElementsByClassName('my-btn');
    buttons[0].classList.remove('text-secondary');
    buttons[0].classList.add('text-primary');
}

const loadCategoryNews = (categoryId) =>{

    selectedCategory(categoryId);
}

const selectedCategory = (categoryId) =>
{
    resetBtn();
    const selectBtn = document.getElementById(categoryId);
    selectBtn.classList.remove('text-secondary');
    selectBtn.classList.add('text-primary');
}

const resetBtn = () => {
    const buttons = document.getElementsByClassName('my-btn');
    for (const button of buttons) {
        
            button.classList.remove('text-primary');
            button.classList.add('text-secondary');
    }
}


loadCategories();
