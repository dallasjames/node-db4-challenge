exports.seed = async (knex) => {
  await knex("instructions").insert([
    { instruction: "Turn oven on 350 degrees", recipe_id: 1 },
    { instruction: "Mix everything together", recipe_id: 1 },
    { instruction: "Roll mix into balls", recipe_id: 1 },
    { instruction: "Put on cookie sheet and bake for 10 minutes", recipe_id: 1 },
    { instruction: "put grill on low", recipe_id: 2 },
    { instruction: "season chicken to liking", recipe_id: 2 },
    { instruction: "drink half a beer", recipe_id: 2 },
    { instruction: "put beer up chickens butt on a baking sheet", recipe_id: 2 },
    { instruction: "throw it on the grill for 3 hours", recipe_id: 2 }
  ])
}