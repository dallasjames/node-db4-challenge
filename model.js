const db = require("./data/db-config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("ingredients as i")
        .join("amounts as a", "i.id", "=", "a.ingredient_id")
        .where("i.recipe_id", recipe_id)
        .select("i.recipe_id", "i.ingredient", "a.amount")
}

function getInstructions(recipe_id) {
    return db("instructions as i")
        .where({ recipe_id })
}

function getRecipesByIngredients(id) {
    return db("ingredients as i")
        .join("recipes as r", "r.id", "=", "i.recipe_id")
        .where("i.id", id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIngredients
}