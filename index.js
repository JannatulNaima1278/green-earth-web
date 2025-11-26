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

// 2

const loadCategories = () => {
    categoryList.innerHTML = "";

    CUSTOM_CATEGORIES.forEach(category => {
        const button = createCategoryButton(category.name, category.apiId);
        categoryList.appendChild(button);
    });
    // all trees load
    document.querySelector("#category-list button").click();
};

// 3

const createCategoryButton = (name, apiId) => {
    const button = document.createElement("button");
    button.innerText = name;
    button.classList.add('w-full', 'text-left', 'p-2', 'rounded', 'hover:bg-green-200', 'text-gray-800', 'mb-1', 'font-semibold', 'transition-colors', 'duration-200');

    button.onclick = () => {
        document.querySelectorAll("#category-list button").forEach(btn => {
            btn.classList.remove('bg-green-700', 'text-white');
            btn.classList.add('hover:bg-green-200', 'text-gray-800');
        });
        button.classList.add('bg-green-800', 'text-white');
        button.classList.remove('hover:bg-green-200', 'text-gray-800');

        loadPlants(apiId);
    };
    return button;
};

// 4

const loadPlants = async (apiId) => {
    plantContainer.innerHTML = '<p class="text-center col-span-full text-gray-500 mt-10">Loading...</p>';

    let url = apiId === 'all' ? API.allPlants : API.category(apiId);
    const plants = await fetchData(url);
    plantContainer.innerHTML = "";

    if(!plants || plants.length === 0){
        plantContainer.innerHTML = '<p class="text-center col-span-full text-lg text-gray-500">No plants found for this category (ID:' + apiId + ').</p>';
        return;
    };

    plants.forEach(plant => {
        plantContainer.innerHTML += createPlantCard(plant);
    });
};

// 5

const createPlantCard = (plant) => {
    const price = plant.price || 'N/A';
    return `
    <div onclick="openModal(${plant.id})" class="bg-white p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl cursor-pointer transition duration-300">
    <div class="h-40 bg-gray-100 rounded-md mb-3 overflow-hidden"><img src="${plant.image || 'https://via.placeholder.com/150'}" alt="${plant.name}" class="w-full h-full object-cover"> </div>

    <h3 class="text-lg font-semibold">${plant.name}</h3>
    <p class="text-sm text-gray-600 mb-3">${plant.description ? plant.description.substring(0, 80) + '...' : 'No description available.'}</p>
    <p class="text-sm text-gray-700 mb-3">৳${plant.price}</p>
    <button onclick="event.stopPropagation(); addToCart('${plant.id}')" class="w-full bg-green-700 text-white py-2 rounded-lg font-bold hover:bg-green-800 transition">Add to Cart</button>
    </div>
    `
};