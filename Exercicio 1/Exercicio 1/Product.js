class Product {
    constructor(name, description, price, discount, newPrice) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
        this.discount = discount;
        this.newPrice = newPrice;
    }
    addToStock(quantidade) {
        this.inStock += quantidade;
    }
    calculateDiscount(desconto) {
        this.newPrice = this.price - (this.price * desconto / 100)
        this.desconto = desconto;
    }
}

const produto = new Product('Notebook', 'Notebook Nitro 5', 1000)
produto.addToStock(10)
produto.calculateDiscount(5)

console.log(`
    Nome do produto: ${produto.name}
    Descrição do produto: ${produto.description}
    Valor do produto: ${'R$' + produto.price + ',00'}
    Quantidade no estoque: ${produto.inStock}
    ===========================================
    Desconto no produto: ${produto.desconto + '%'}
    Novo valor do produto: ${'R$' + produto.newPrice + ',00'}`)