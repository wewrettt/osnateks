const products = [
    // ВЕТОШЬ (6 позиций)
    {
        id: 1,
        name: "Цветной трикотаж",
        category: "vetosh",
        image: "images/Vetosh1.jpg", 
        size: "40×60 см",
        material: "100% хб",
        prices: {
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79,
            "3000 кг": 75
        },
        inStock: true,
        description: "Качественная ветошь из цветного трикотажа. Идеально подходит для уборки помещений и протирки оборудования."
    },
    {
        id: 2,
        name: "Светлый трикотаж",
        category: "vetosh",
        image: "images/Vetosh2.jpg",
        size: "40×60 см",
        material: "100% хб",
        prices: {
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79,
            "3000 кг": 75
        },
        inStock: true,
        description: "Светлая ветошь из трикотажа. Не линяет, отлично впитывает влагу."
    },
    {
        id: 3,
        name: "Махровая ветошь",
        category: "vetosh",
        image: "images/Vetosh6.jpg",
        size: "40×60 см",
        material: "100% хб",
        prices: {
            "100 кг": 109,
            "500 кг": 102,
            "1000 кг": 99,
            "3000 кг": 95
        },
        inStock: true,
        description: "Мягкая махровая ветошь. Отлично подходит для полировки и деликатных поверхностей."
    },
    {
        id: 4,
        name: "Фланелевая ветошь",
        category: "vetosh",
        image: "images/Vetosh5.jpg",
        size: "40×60 см",
        material: "100% хб",
        prices: {
            "100 кг": 109,
            "500 кг": 102,
            "1000 кг": 99,
            "3000 кг": 95
        },
        inStock: true,
        description: "Фланелевая ветошь для тщательной уборки. Мягкая и впитывающая."
    },
    {
        id: 5,
        name: "Цветные простыни",
        category: "vetosh",
        image: "images/Vetosh3.jpg",
        size: "40×60 см",
        material: "100% хб",
        prices: {
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79,
            "3000 кг": 75
        },
        inStock: true,
        description: "Ветошь из цветных простыней. Прочная и износостойкая."
    },
    {
        id: 6,
        name: "Светлые простыни",
        category: "vetosh",
        image: "images/Vetosh4.jpg",
        size: "40×60 см",
        material: "100% хб",
        prices: {
            "100 кг": 109,
            "500 кг": 102,
            "1000 кг": 99,
            "3000 кг": 95
        },
        inStock: true,
        description: "Светлая ветошь из простыней. Высокое качество и чистота."
    }
];

// Функции для доступа к товарам
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Делаем доступным глобально
window.products = products;
window.getProductById = getProductById;