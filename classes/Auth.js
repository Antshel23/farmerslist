const Product = require(`./Product`)
const Cart = require(`./Cart`)
const Customer = require(`./Customer`)

class Auth {
constructor(customers = []) {
    this.customers = customers
    }

register(name,email,shippingAddress) {
const customer1 = new Customer(name, email, shippingAddress)
this.customers.push(customer1)
    }

    login(email) {
const customer = this.customers.find(customer => customer.email === email)
if (customer) {
    return customer
        }       
        else {
            return null
        }
    }
}


module.exports = Auth