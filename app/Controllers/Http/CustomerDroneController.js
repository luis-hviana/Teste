'use strict'

const CustomerDrone = use("App/Models/CustomerDrone");

const { validateAll } = use("Validator");

class CustomerDroneController {

    async store({ request, response }) {
        const rules = {
            drone_id: "required",
            customer_id: "required",
            status: "required",
            current_fly: "required"
        }

        const validate = await validateAll(request.all(), rules);

        if (validate.fails()) {
            return response.status(401).send({message: validate.messages()})
        }

        const {drone_id, customer_id, status, current_fly} = request.all();

        const customerdrone = await CustomerDrone.create({drone_id, customer_id, status, current_fly});

        return customerdrone;
    }

    async index({ request, response }) {
        const data = request.get()

        if (data.order) {
            const customerdrone = await CustomerDrone.query()
            .with('drone')
            .with('customer')
            .forPage(data.page, data.limit)
            .orderBy(data.sort, data.order)
            .fetch()

            return customerdrone;
        }

        const customerdrone = await CustomerDrone.query()
            .with('drone')
            .with('customer')
            .forPage(data.page, data.limit)
            .fetch()

        return customerdrone;
    }

    async show({ params, response }) {
        const customerdrone = await CustomerDrone.find(params.id)

        if(!customerdrone) {
            return response.status(404).send({ message: 'this item is not found' });
        }
 
        return customerdrone
    }

    async update({ request, response, params }) {
        const {status, current_fly} = request.all();

        const customerdrone = await CustomerDrone.find(params.id);

        if (!customerdrone) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        customerdrone.status = status;
        customerdrone.current_fly = current_fly;

        await customerdrone.save();

        return customerdrone;
    }

    async delete({ response, params }) {
        const customerdrone = await CustomerDrone.find(params.id)

        if (!customerdrone) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        await customerdrone.delete();

        return response.status(200).send({ message: 'this item has been deleted' })
    }
}

module.exports = CustomerDroneController
