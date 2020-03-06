exports.seed = async (knex) => {
  await knex("ingredients").insert([
    { ingredient: "can of beer", recipe_id: 2 },
    { ingredient: "chicken", recipe_id: 2 },
    { ingredient: "paprika", recipe_id: 2 },
    { ingredient: "pepper", recipe_id: 2 },
    { ingredient: "chocolate chips", recipe_id: 1 },
    { ingredient: "flour", recipe_id: 1 },
    { ingredient: "sugar", recipe_id: 1 },
    { ingredient: "egg", recipe_id: 1 },
    { ingredient: "butter", recipe_id: 1 },
    { ingredient: "salt", recipe_id: 1 },
    { ingredient: "vanilla", recipe_id: 1 },
    { ingredient: "baking soda", recipe_id: 1 }
  ])
}