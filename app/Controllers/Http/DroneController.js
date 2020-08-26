'use strict'

const Drone = use("App/Models/Drone");

const { validateAll } = use("Validator");

class DroneController {

    async store({ request, response }) {

        const rules = {
            max_speed: "required",
            average_speed: "required",
            battery: "required",
        }

        const validate = await validateAll(request.all(), rules);

        if (validate.fails()) {
            return response.status(401).send({message: validate.messages()})
        }

        const {max_speed, average_speed, battery} = request.all();

        const drone = await Drone.create({max_speed, average_speed, battery});

        return drone;
    }

    async index({ request, response }) {
        const drones = await Drone.all();

        return drones;
    }

    async show({ params, response }) {
        const drone = await Drone.find(params.id)

        if(!drone) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        return drone;
    }

    async update({ request, response, params }) {
        const {max_speed, average_speed, battery} = request.all();

        const drone = await Drone.find(params.id);

        if (!drone) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        drone.max_speed = max_speed;
        drone.average_speed = average_speed;
        drone.battery = battery;

        await drone.save();

        return drone;
    }

    async delete({ response, params }) {
        const drone = await Drone.find(params.id)

        if (!drone) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        await drone.delete();

        return response.status(200).send({ message: 'this item has been deleted' })
    }
    
}

module.exports = DroneController
