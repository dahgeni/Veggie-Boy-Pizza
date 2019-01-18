const mongoose = require('mongoose');
const PizzaSchema = require('./pizza.schema.server');

const PizzaModel = mongoose.model('PizzaModel', PizzaSchema);

PizzaModel.createPizza = createPizza;
PizzaModel.updatePizza = updatePizza;
PizzaModel.findPizza = findPizza;
PizzaModel.deletePizza = deletePizza;

function createPizza(pizza) { 
    return PizzaModel.create(pizza)
}

function updatePizza(pid, pizza) { 
    return PizzaModel.updateOne({ _id: pid}, pizza)
}

function findPizza() { 
    return PizzaModel.find({});
}

function deletePizza(pid) { 
    return PizzaModel.deleteOne({ _id: pid });
}

module.exports = PizzaModel;