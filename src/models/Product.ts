import { uuid } from 'uuidv4'
class Product{
    id: string;

    code: number;

    description: string;

    buyPrice: number;

    tags: Array<Product>;

    lovers: number;

    constructor({code, description, buyPrice, tags, lovers}:Product) {
        this.code = code;
        this.description = description;
        this.buyPrice = buyPrice;
        this.tags = tags;
        this.lovers = lovers;
        this.id = uuid();
    }
}