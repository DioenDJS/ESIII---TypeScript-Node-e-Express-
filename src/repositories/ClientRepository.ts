import Client from '../models/Client';

export default class ClientRepository{
    private clients: Client[]

    constructor(){
        this.clients = []
    }

    public findAll():Client[]{
        return this.clients;
    }

    public findById(id: string): Client | undefined{
        return this.clients.find(item => item.id == id);
    }

    
    public save({name, buyLast, purchases, id}: Client){
        const newClient = new Client({name, buyLast, purchases, id});
        this.clients.push(newClient);
        return newClient;
    }

    
}