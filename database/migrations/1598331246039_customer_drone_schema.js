'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerDroneSchema extends Schema {
  up () {
    this.create('customer_drones', (table) => {
      table.increments()
      table.integer('drone_id')
        .references('id')
        .inTable('drones')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('customer_id')
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('status')
      table.integer('current_fly')
      table.timestamps()
    })
  }

  down () {
    this.drop('customer_drones')
  }
}

module.exports = CustomerDroneSchema
