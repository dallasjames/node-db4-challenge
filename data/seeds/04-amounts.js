exports.seed =  async (knex) => {
  await knex("amounts").insert([
    { amount: "1 can", recipe_id: 1 , ingredient_id: 1 },
    { amount: "1", recipe_id: 1 , ingredient_id: 2 },
    { amount: "1 cup", recipe_id: 1 , ingredient_id: 9 },
    { amount: "2 tbsp", recipe_id: 1 , ingredient_id: 3 },
    { amount: "to liking", recipe_id: 1 , ingredient_id: 4 },
    { amount: "2 cups", recipe_id: 2 , ingredient_id: 5 },
    { amount: "3 cups", recipe_id: 2 , ingredient_id: 6 },
    { amount: "1 cup", recipe_id: 2 , ingredient_id: 7 },
    { amount: "2 large", recipe_id: 2 , ingredient_id: 8 },
    { amount: "1 cup", recipe_id: 2 , ingredient_id: 9 },
    { amount: "1/2 tsp", recipe_id: 2 , ingredient_id: 10 },
    { amount: "2 tsp", recipe_id: 2 , ingredient_id: 11 },
    { amount: "1 tsp", recipe_id: 2 , ingredient_id: 12 }
  ])
}