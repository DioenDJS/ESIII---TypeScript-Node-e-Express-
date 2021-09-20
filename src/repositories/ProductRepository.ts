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
        
        const confirmProduct = this.products.find(item =>  item.id === id)
        
        if(!confirmProduct){
            throw new Error('não exist product !');
        }
        
        const productsChange =  this.products.filter(item =>  {

            if(item.id !== id){
                return item;
            }else{

                return  item.description = description,
                        item.code = code,
                        item.buyPrice = buyPrice,
                        item.sellPrice = sellPrice,
                        item.tags = tags
                    
            }
            
        });
        
        this.products = [];
        this.products = productsChange;
        
        return confirmProduct; 
    }

    
}