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
        return this.products.find(item => item.code == code);
    }

    public save({code, description, buyPrice, sellPrice, tags, lovers}: Product){
        const product = new Product({code, description, buyPrice, sellPrice, tags, lovers});
        this.products.push(product)
        console.log(this.products)
        return product;
    }

    public alterar({ description, code, buyPrice, sellPrice, tags, id}: Product): Product {
    
        const productsChange = this.products.find((value) => value.id === id);
        const storeValuablesProductsChange = productsChange;
    
    console.log(id)
    console.log(productsChange)

        if(!productsChange){
            throw Error('Produto já existe ! ');
        }
        const newListProducts = this.products.filter(value => value.id !== id);

        productsChange.description = description;
        productsChange.code = code;
        productsChange.buyPrice = buyPrice;
        productsChange.sellPrice = sellPrice;
        productsChange.tags = tags;

        this.products = [...newListProducts , productsChange ];

        return productsChange;
    }

    public  delete(id: string) {
        const deletedProduct = this.products.find(item => item.id === id);
        const idDeletedProduct = deletedProduct?.id;
        // this.products.pop(deletedProduct):Product | undefined;
        
        return deletedProduct;
    }
}