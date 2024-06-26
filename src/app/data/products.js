const products = [
    {
        "id": 1,
        "name": "Men's Casual Shirt",
        "releaseYear": 2021,
        "price": 45.99,
        "manufacturer_id": 3,
        "categories": ["Men's", "Clothing"]
    },
    {
        "id": 2,
        "name": "Women's Summer Dress",
        "releaseYear": 2020,
        "price": 65.50,
        "manufacturer_id": 17,
        "categories": ["Women's", "Clothing"]
    },
    {
        "id": 3,
        "name": "Unisex Sneakers",
        "releaseYear": 2022,
        "price": 80.00,
        "manufacturer_id": 13,
        "categories": ["Unisex", "Footwear"]
    },
    {
        "id": 4,
        "name": "Men's Winter Jacket",
        "releaseYear": 2021,
        "price": 120.00,
        "manufacturer_id": 9,
        "categories": ["Men's", "Clothing"]
    },
    {
        "id": 5,
        "name": "Women's Leather Boots",
        "releaseYear": 2020,
        "price": 150.99,
        "manufacturer_id": 14,
        "categories": ["Women's", "Footwear"]
    },
    {
        "id": 6,
        "name": "Kids' Denim Jeans",
        "releaseYear": 2022,
        "price": 35.50,
        "manufacturer_id": 4,
        "categories": ["Kids'", "Clothing"]
    },
    {
        "id": 7,
        "name": "Boys' T-shirt",
        "releaseYear": 2023,
        "price": 15.99,
        "manufacturer_id": 4,
        "categories": ["Kids'", "Clothing"]
    },
    {
        "id": 8,
        "name": "Girls' Skirt",
        "releaseYear": 2023,
        "price": 20.50,
        "manufacturer_id": 4,
        "categories": ["Kids'", "Clothing"]
    },
    {
        "id": 9,
        "name": "Kids' Sneakers",
        "releaseYear": 2022,
        "price": 50.00,
        "manufacturer_id": 10,
        "categories": ["Kids'", "Footwear"]
    },
    {
        "id": 10,
        "name": "Unisex Kids' Beanie Hat",
        "releaseYear": 2022,
        "price": 18.00,
        "manufacturer_id": 18,
        "categories": ["Unisex", "Kids'", "Accessories"]
    },
    {
        "id": 11,
        "name": "Kids' Swim Shorts",
        "releaseYear": 2022,
        "price": 30.00,
        "manufacturer_id": 7,
        "categories": ["Swimwear", "Kids'"]
    },
    {
        "id": 12,
        "name": "Girls' Floral Dress",
        "releaseYear": 2023,
        "price": 55.99,
        "manufacturer_id": 17,
        "categories": ["Girls'", "Clothing"]
    },
    {
        "id": 13,
        "name": "Boys' Hoodie",
        "releaseYear": 2023,
        "price": 40.00,
        "manufacturer_id": 9,
        "categories": ["Boys'", "Clothing"]
    },
    {
        "id": 14,
        "name": "Kids' Rain Boots",
        "releaseYear": 2022,
        "price": 35.00,
        "manufacturer_id": 14,
        "categories": ["Kids'", "Footwear"]
    },
    {
        "id": 15,
        "name": "Unisex Kids' Pajamas",
        "releaseYear": 2023,
        "price": 25.99,
        "manufacturer_id": 6,
        "categories": ["Unisex", "Kids'", "Clothing"]
    },
    {
        "id": 16,
        "name": "Girls' Ballet Flats",
        "releaseYear": 2022,
        "price": 60.00,
        "manufacturer_id": 19,
        "categories": ["Girls'", "Footwear"]
    },
    {
        "id": 17,
        "name": "Boys' Cargo Shorts",
        "releaseYear": 2023,
        "price": 30.50,
        "manufacturer_id": 8,
        "categories": ["Boys'", "Clothing"]
    },
    {
        "id": 18,
        "name": "Kids' Sun Hat",
        "releaseYear": 2022,
        "price": 18.00,
        "manufacturer_id": 20,
        "categories": ["Kids'", "Accessories"]
    },
    {
        "id": 19,
        "name": "Unisex Kids' Backpack",
        "releaseYear": 2023,
        "price": 45.00,
        "manufacturer_id": 2,
        "categories": ["Unisex", "Kids'", "Accessories"]
    },
    {
        "id": 20,
        "name": "Girls' Leggings",
        "releaseYear": 2023,
        "price": 20.00,
        "manufacturer_id": 5,
        "categories": ["Girls'", "Sportswear"]
    },
    {
        "id": 21,
        "name": "Boys' Swim Trunks",
        "releaseYear": 2022,
        "price": 28.00,
        "manufacturer_id": 7,
        "categories": ["Swimwear", "Boys'"]
    },
    {
        "id": 22,
        "name": "Men's Leather Jacket",
        "releaseYear": 2022,
        "price": 250.00,
        "manufacturer_id": 12,
        "categories": ["Men's", "Clothing"]
    },
    {
        "id": 23,
        "name": "Men's Leather Cool Jacket",
        "releaseYear": 2022,
        "price": 252.00,
        "manufacturer_id": 200,
        "categories": ["Men's", "Clothing"]
    }
]

export function isProductNameValid(name) {
    if (name == null || name == undefined) {
        return false;
    }
    return name.trim().length >= 3;
}

export function isProductReleaseYearValid(releaseYear) {
    if (releaseYear == null || releaseYear == undefined) {
        return false;
    }
    const currentYear = new Date().getFullYear();
    return releaseYear <= currentYear;
}

export function isProductPriceValid(price) {
    if (price == null || price == undefined) {
        return false;
    }
    return price >= 0;
}

export function isManufacturerNameValid(name) {
    if (name == null || name == undefined) {
        return false;
    }
    return name.trim().length >= 3;
}

export function isManufacturerCooperationDateValid(cooperationDate) {
    if (cooperationDate == null || cooperationDate == undefined) {
        return false;
    }
    try {
        const date = Date.parse(cooperationDate);
        return !isNaN(date);
    } catch (error) {
        return false;
    }
}

export function isManufacturerContactNumberValid(contactNumber) {
    if (contactNumber == null || contactNumber == undefined) {
        return false;
    }
    return true;
}

export function isManufacturerEmailValid(email) {
    if (email == null || email == undefined) {
        return false;
    }
    return email.includes("@");
}

export function getProductData() {
    return products[0];
}


export function deleteProductById(productId) {
    products[0] = products.filter(product => product.id !== productId);
}
