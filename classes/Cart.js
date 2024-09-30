const Product = require(`./Product`)

class Cart {
    constructor(products = [], total = 0) {
this.products = products
this.total = total
    }
    addProduct(product) {
        if(product instanceof Product) {
            this.products.push(product)
            this.total += product.price
        }
        else {
            throw new Error('Product instance does not exist')
        }
    }

    removeProduct(index) {
        this.total -= this.products[index].price
       this.products.splice(index, 1)
       
    }
}

module.exports = Cart