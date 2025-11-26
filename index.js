const API_BASE = "https://openapi.programming-hero.com/api/";

const API = {
    allPlants: API_BASE + "plants",
    category: (id) => API_BASE + "category/" + id,
    plantsDetails: (id) => API_BASE + "plants/" + id,
};

const categoryList = document.getElementById("category-list");

const plantContainer = document.getElementById("plant-container");

const cartItemsContainer = document.getElementById("cart-items");

const cartTotalElement = document.getElementById("cart-total");

const modalElement = document.getElementById("plant-details-modal");

const modalContentBox = document.getElementById("modal-content-box");

const modalBody = document.getElementById("modal-details-body");

let cart = [];

const CUSTOM_CATEGORIES = [
    {name: 'All Trees', apiId: 'all'},
    {name: 'Fruit Trees', apiId: '1'},
    {name: 'Flowering', apiId: '2'},
    {name: 'Shade Trees', apiId: '3'},
    {name: 'Medicinal Trees', apiId: '4'},
    {name: 'Timber Trees', apiId: '5'},
    {name: 'Evergreen Trees', apiId: '6'},
    {name: 'Ornamental Plants', apiId: '7'},
    {name: 'Bamboo', apiId: '8'},
    {name: 'Climbers', apiId: '9'},
    {name: 'Aquatic Plants', apiId: '10'},
]

// 1

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.data || data.plants || [];
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
};