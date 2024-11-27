# World News

[Live Site](https://world-news-rakibul58.netlify.app/)

## Overview
A responsive web application for browsing and reading news articles across different categories, featuring dynamic content loading and modal details view.

## Features
- Dynamic news category navigation
- Sort news by view count
- Responsive design using Bootstrap
- Modal view for detailed news articles
- Loading spinner during content fetch

## Technologies Used
- HTML5
- Bootstrap 5
- JavaScript (Fetch API)
- FontAwesome for icons

## API
Uses the Programming Hero Open API for fetching news categories and articles:
- Categories API: `https://openapi.programming-hero.com/api/news/categories`
- Category News API: `https://openapi.programming-hero.com/api/news/category/{categoryId}`
- News Details API: `https://openapi.programming-hero.com/api/news/{newsId}`

## Key JavaScript Functions
- `loadCategories()`: Fetches and displays news categories
- `loadCategoryNews()`: Loads news for a specific category
- `showCategoryNews()`: Renders news articles in the UI
- `newsDetailFetch()`: Retrieves and displays detailed news information
- `toggle()`: Manages loading spinner visibility

## Setup
1. Clone the repository
2. Open `index.html` in a web browser
3. No additional installation required

## Project Structure
```
world-news/
├── index.html
├── js/
│   └── app.js
├── styles/
│   └── style.css
└── images/
    └── images.jpg
```

## Responsive Design
- Mobile-friendly navigation
- Flexible grid layout
- Adaptive typography

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss proposed modifications.
