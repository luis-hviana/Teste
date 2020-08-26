'use strict'

const Customer = use("App/Models/Customer");

class CustomerController {
    async store({ request, response }) {
        const {customer_image, customer_name, customer_address} = request.all();

        const customer = await Customer.create({customer_image, customer_name, customer_address});

        return customer;
    }

    async show({ params, response }) {
        const customer = await Customer.find(params.id)

        if(!customer) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        return customer;
    }

    async index({ request, response }) {
        const customers = await Customer.all();

        return customers;
    }

    async update({ request, response, params }) {
        const {customer_image, customer_name, customer_address} = request.all();

        const customer = await Customer.find(params.id);

        if (!customer) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        customer.customer_image = customer_image;
        customer.customer_name = customer_name;
        customer.customer_address = customer_address;

        await customer.save();

        return customer;
    }

    async delete({ response, params }) {
        const customer = await Customer.find(params.id)

        if (!customer) {
            return response.status(404).send({ message: 'this item is not found' });
        }
        await customer.delete();

        return response.status(200).send({ message: 'this item has been deleted' })
    }
}

module.exports = CustomerController
