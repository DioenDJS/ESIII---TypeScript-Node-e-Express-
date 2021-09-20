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

    public async alterar(name:string, id:string):Promise<Client | undefined> {
        
        const confirmClint = this.clients.find(item =>  item.id === id)
        
        if(!confirmClint){
            return undefined;
        }
        
        const clientChange = await this.clients.filter(item =>  item.id !== id? item : item.name = name);
        
        this.clients = [];
        this.clients = clientChange;
        
        return confirmClint; 
    }
}