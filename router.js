const express = require("express")
const recipes = require("./model")
const router = express.Router()

router.get("/recipes", async (req, res) => {
    try {
        const rec = await recipes.getRecipes()
        res.json(rec)
    } catch {
        res.status(500).json({ error: "not working" })
    }
})

router.get("/recipes/:id/shoppingList", async (req, res) => {
    try {
        const id = req.params.id
        const list = await recipes.getShoppingList(id)
        res.json(list)
    } catch {
        res.status(500).json({ error: "not working" })
    }
})

router.get("/recipes/:id/instructions", async (req, res) => {
    try {
        const id = req.params.id
        const inst = await recipes.getInstructions(id)
        res.json(inst)
    } catch {
        res.status(500).json({ error: "not working" })
    }
})

router.get("/ingredients/:id/recipes", async (req, res) => {
    try {
        const id =  req.params.id
        const other = await recipes.getRecipesByIngredients(id)
        res.json(other)
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "not working" })
    }
})

module.exports = router;