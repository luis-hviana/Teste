'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/drone', ('DroneController.store'))
Route.get('/drone', ('DroneController.index'))
Route.get('/drone/:id', ('DroneController.show'))
Route.delete('/drone/:id', ('DroneController.delete'))
Route.put('/drone/:id', ('DroneController.update'))

Route.post('/customer', ('CustomerController.store'))
Route.get('/customer', ('CustomerController.index'))
Route.get('/customer/:id', ('CustomerController.show'))
Route.delete('/customer/:id', ('CustomerController.delete'))
Route.put('/customer/:id', ('CustomerController.update'))

Route.post('/customerdrone', ('CustomerDroneController.store'))
Route.get('/customerdrone', ('CustomerDroneController.index'))
Route.get('/customerdrone/:id', ('CustomerDroneController.show'))
Route.delete('/customerdrone/:id', ('CustomerDroneController.delete'))
Route.put('/customerdrone/:id', ('CustomerDroneController.update'))


