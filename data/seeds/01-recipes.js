exports.seed = async (knex) => {
  await knex("recipes").insert([
    { name: "Chocolate-Chip Cookies" },
    { name: "Beer-butt Chicken" }
  ])
}