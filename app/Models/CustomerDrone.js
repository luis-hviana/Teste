'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CustomerDrone extends Model {
    drone(){
        return this.belongsTo("App/Models/Drone");
    }

    customer(){
        return this.belongsTo("App/Models/customer");
    }
}

module.exports = CustomerDrone
