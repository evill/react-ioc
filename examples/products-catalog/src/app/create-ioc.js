import { IoCContainer, iocClass } from 'ioc';

import { database, DB_RESOURCE_NAME } from '../db';
import { ProductService, PRODUCT_SERVICE_NAME } from '../product';

export default function() {
    let ioc = new IoCContainer();
    
    ioc.registerAll({
        [DB_RESOURCE_NAME]: database,
        [PRODUCT_SERVICE_NAME]: iocClass(ProductService)
    });

    return ioc;
}

