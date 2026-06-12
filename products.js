const products = [
    // ВЕТОШЬ (6 позиций)
    {
        id: 1,
        name: "Цветной трикотаж",
        category: "vetosh",
        image: "images/Vetosh1.jpg", 
        size: "40×60 см",
        material: "100% хб",
        unit: "kg",
        prices: {
            "0 кг": 85,
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79
            
        },
        inStock: false,
        description: "Качественная ветошь из цветного трикотажа. Идеально подходит для уборки помещений и протирки оборудования."
    },
    {
        id: 2,
        name: "Светлый трикотаж",
        category: "vetosh",
        image: "images/Vetosh2.jpg",
        size: "40×60 см",
        material: "100% хб",
        unit: "kg",
        prices: {
            "0 кг": 85,
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79
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
        unit: "kg",
        prices: {
            "0 кг": 109,
            "100 кг": 102,
            "500 кг": 100,
            "1000 кг": 92
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
        unit: "kg",
        prices: {
            "0 кг": 109,
            "100 кг": 102,
            "500 кг": 100,
            "1000 кг": 92
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
        unit: "kg",
        prices: {
            "0 кг": 85,
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79
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
        unit: "kg",
        prices: {
            "0 кг": 85,
            "100 кг": 83,
            "500 кг": 82,
            "1000 кг": 79
        },
        inStock: true,
        description: "Светлая ветошь из простыней. Высокое качество и чистота."
    },
    //ПЕРЧАТКИ
    {
        id: 7,
        name: "Перчатки 1",
        category: "gloves",
        image: "images/gloves.jpg",
        size: "???",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 109,
            "1000 шт": 102,
            
        },
        inStock: true,
        description: "Светлая перчатки лялялялялялял."
    },
    {
        id: 8,
        name: "Перчатки 2",
        category: "gloves",
        image: "images/gloves.jpg",
        size: "???",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 109,
            "1000 шт": 102,
            
        },
        inStock: true,
        description: "Светлая перчатки лялялялялялял."
    },
    {
        id: 9,
        name: "Перчатки 3",
        category: "gloves",
        image: "images/gloves.jpg",
        size: "???",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 109,
            "1000 шт": 102,
            
        },
        inStock: true,
        description: "Светлая перчатки лялялялялялял."
    },
    {
        id: 10,
        name: "Перчатки 4",
        category: "gloves",
        image: "images/gloves.jpg",
        size: "???",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 109,
            "1000 шт": 102,
            
        },
        inStock: true,
        description: "Светлая перчатки лялялялялялял."
    },
    {
        id: 11,
        name: "Перчатки 5",
        category: "gloves",
        image: "images/gloves.jpg",
        size: "???",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 109,
            "1000 шт": 102,
            
        },
        inStock: true,
        description: "Светлая перчатки лялялялялялял."
    },
    {
        id: 12,
        name: "Вафельное полотно 1",
        category: "vafelka",
        image: "images/vafelka.jpg",
        size: "40см×20м",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 165,
            "100 шт": 150,
            "1000 шт": 123,
            
        },
        inStock: true,
        description: "Светлое вафельное полотно ляляляял."
    },
    {
        id: 13,
        name: "Вафельное полотно 2",
        category: "vafelka",
        image: "images/vafelka.jpg",
        size: "40см×20м",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 165,
            "100 шт": 150,
            "1000 шт": 123,
            
        },
        inStock: true,
        description: "Светлое вафельное полотно ляляляял."
    },
    {
        id: 14,
        name: "Вафельное полотно 3",
        category: "vafelka",
        image: "images/vafelka.jpg",
        size: "40см×20м",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 165,
            "100 шт": 150,
            "1000 шт": 123,
            
        },
        inStock: true,
        description: "Светлое вафельное полотно ляляляял."
    },
    {
        id: 15,
        name: "Вафельное полотно 4",
        category: "vafelka",
        image: "images/vafelka.jpg",
        size: "40см×20м",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 165,
            "100 шт": 150,
            "1000 шт": 123,
            
        },
        inStock: true,
        description: "Светлое вафельное полотно ляляляял."
    },
    {
        id: 16,
        name: "Вафельное полотно 5",
        category: "vafelka",
        image: "images/vafelka.jpg",
        size: "40см×20м",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 165,
            "100 шт": 150,
            "1000 шт": 123,
            
        },
        inStock: true,
        description: "Светлое вафельное полотно ляляляял."
    },
    {
        id: 17,
        name: "Марля 1",
        category: "marla",
        image: "images/marla.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Марля такая то такая то."
    },
    {
        id: 18,
        name: "Марля 2",
        category: "marla",
        image: "images/marla.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Марля такая то такая то."
    },
    {
        id: 19,
        name: "Марля 3",
        category: "marla",
        image: "images/marla.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Марля такая то такая то."
    },
    {
        id: 20,
        name: "Марля 4",
        category: "marla",
        image: "images/marla.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Марля такая то такая то."
    },
    {
        id: 21,
        name: "Марля 5",
        category: "marla",
        image: "images/marla.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Марля такая то такая то."
    },
    {
        id: 22,
        name: "Разволокненное полотно 1",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    },
    {
        id: 23,
        name: "Разволокненное полотно 2",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    },
    {
        id: 24,
        name: "Разволокненное полотно 3",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    },
    {
        id: 25,
        name: "Разволокненное полотно 4",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    },
    {
        id: 26,
        name: "Разволокненное полотно 5",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    },
    {
        id: 27,
        name: "Разволокненное полотно 6",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    },
    {
        id: 28,
        name: "Разволокненное полотно 7",
        category: "rb",
        image: "images/rb.jpg",
        size: "40×60",
        material: "100% хб",
        unit: "pcs",
        prices: {
            "0 шт": 115,
            "100 шт": 106,
            "1000 шт": 99,
            
        },
        inStock: true,
        description: "Разволокненное полотно ляляляляля."
    }
   

    

];

// Функции для доступа к товарам
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Делаем доступным глобально
window.products = products;
window.getProductById = getProductById;