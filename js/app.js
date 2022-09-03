const loadCategories = () => {
    toggle(true);
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
            <button id="${category.category_id}" onclick="loadCategoryNews('${category.category_id}')" class="btn fw-semibold fs-5 text-secondary my-btn" > ${category.category_name} </button>`;
        categoriesDiv.appendChild(newDiv);

    });
    const buttons = document.getElementsByClassName('my-btn');
    buttons[0].classList.remove('text-secondary');
    buttons[0].classList.add('text-primary');
    loadCategoryNews('05');
}

const loadCategoryNews = (categoryId) => {
    toggle(true);
    selectedCategory(categoryId);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showCategoryNews(data.data))
        .catch(error => console.log(error));
}

const selectedCategory = (categoryId) => {
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

const showCategoryNews = categoryItems => {
    const newsBlock = document.getElementById('news-block');
    newsBlock.textContent = '';
    // console.log(categoryItems)
    const numOfCategories = document.getElementById('number-of-categories');
    numOfCategories.innerText = `${categoryItems.length ? categoryItems.length : 'No'} items found for category Entertainment`;
    categoryItems.forEach(categoryItem => {
        console.log(categoryItem.author);
        const newBlock = document.createElement('div');
        newBlock.classList.add('row', 'g-0', 'mb-5', 'bg-white', 'p-3', 'rounded-4');
        let details = categoryItem.details;
        if (categoryItem.details.length > 500) {
            details = details.slice(0, 500) + '...';
        }
        newBlock.innerHTML = `

                    <div class="col-md-4 text-center text-lg-start">
                        <img src="${categoryItem.thumbnail_url}" class="img-fluid rounded-4" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-5 text-black my-3">${categoryItem.title}</h5>
                            <p class="card-text text-secondary fs-6 fw-semibold">
                            ${details}
                            </p>
                            <div class="mt-5 d-flex align-items-center gap-4">
                                <div>
                                <img width="40" class="rounded-circle" src = "${categoryItem.author.img}">
                                </div>
                                <div class="d-flex flex-column fw-semibold">
                                    <p class="m-0">${categoryItem.author.name || null ? categoryItem.author.name : 'No Data Found'}</p>
                                    <p class="m-0 text-secondary">${categoryItem.author.published_date || null ? categoryItem.author.published_date : 'No Data Found'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

        `;
        newsBlock.appendChild(newBlock);
    });
    toggle(false);
}

const toggle = isLoading => {

    if (isLoading) {
        document.getElementById('loading').classList.remove('d-none');
    }
    else {
        document.getElementById('loading').classList.add('d-none');
    }

}

loadCategories();

