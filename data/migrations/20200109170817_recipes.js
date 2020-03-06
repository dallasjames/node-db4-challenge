
exports.up = async function(knex) {
    const id = "id"
    await knex.schema.createTable("recipes", (table) => {
        table.increments(id)
        table.string("name").notNullable()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments(id)
        table.string("ingredient").notNullable()
        table.integer("recipe_id")
            .notNullable()  
            .references(id)
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments(id)
        table.string("instruction").notNullable()
        table.integer("recipe_id")
            .notNullable()  
            .references(id)
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("amounts", (table) => {
        table.increments(id)
        table.string("amount").notNullable()
        table.integer("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("ingredient_id")
            .notNullable()  
            .references(id)
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("amounts")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
