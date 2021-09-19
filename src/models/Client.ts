import { uuid } from 'uuidv4'
import Product from './Product';
export default class Client{
    id: string;

    name: string;

    buyLast: Date;

    purchases: Product[];

    constructor({ name, purchases}: Omit<Client, 'id, buyLast'>) {
        this.name = name;
        this.buyLast = new Date();
        this.id = uuid();
        this.purchases = purchases;
    }
}