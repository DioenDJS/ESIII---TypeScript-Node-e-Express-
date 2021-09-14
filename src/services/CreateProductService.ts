import Product from "../models/Product";
import ProductRepository from "../repositories/ProductRepository";

export default class CreateProductService{
    
    private repository: ProductRepository;

    constructor(repository: ProductRepository){
        this.repository = repository
    }

    public execute({buyPrice,code, sellPrice, description, lovers, tags}:Product): Product {
        const product = this.repository.findByCode(code);
        if(product){
            return product;
        }
        throw Error("Produto já existe ! ");
    }
}