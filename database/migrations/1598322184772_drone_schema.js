'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DroneSchema extends Schema {
  up () {
    this.create('drones', (table) => {
      table.increments()
      table.decimal('max_speed').notNullable()
      table.decimal('average_speed').notNullable()
      table.integer('battery').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('drones')
  }
}

module.exports = DroneSchema
