import { DB_RESOURCE_NAME } from '../../db';

export class ProductService {
    
    static $inject = [ DB_RESOURCE_NAME ];
    
    constructor(database) {
        this._database = database;
    }

    getList() {
        return Promise.resolve(this._database.products);
    }
}

