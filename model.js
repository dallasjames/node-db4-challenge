const db = require("./data/db-config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("ingredients as i")
        .join("amounts as a")
        .where({ recipe_id })
        .select("i.ingredient", "a.amount")
}

function getInstructions(recipe_id) {
    return db("instructions as i")
        .where({ recipe_id })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}