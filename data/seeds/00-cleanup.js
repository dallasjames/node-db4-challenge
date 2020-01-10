exports.seed = async (knex) => {
  await knex("amounts").truncate()
  await knex("instructions").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
}