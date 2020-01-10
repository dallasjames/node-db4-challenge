exports.seed = async (knex) => {
  await knex("ingredients").insert([
    { ingredient: "can of beer" },
    { ingredient: "chicken" },
    { ingredient: "paprika" },
    { ingredient: "pepper" },
    { ingredient: "chocolate chips" },
    { ingredient: "flour" },
    { ingredient: "sugar" },
    { ingredient: "egg" },
    { ingredient: "butter" },
    { ingredient: "salt" },
    { ingredient: "vanilla" },
    { ingredient: "baking soda" }
  ])
}