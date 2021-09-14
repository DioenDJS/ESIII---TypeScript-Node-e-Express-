import Product from '../models/Product';

export default class ProductRepository{
    private products: Product[]

    constructor(){
        this.products = []
    }

    public findAll():Product[]{
        return this.products;
    }

    public findByCode(code: number): Product | undefined{
        return this.products.find(item => item.code === code);
    }

    public save({code, description, buyPrice, sellPrice, tags, lovers}: Product){
        const product = new Product({code, description, buyPrice, sellPrice, tags, lovers});
        this.products.push(product)

        return product;
    }
}