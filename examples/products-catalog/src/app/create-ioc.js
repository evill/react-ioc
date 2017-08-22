import { IoCContainer, iocClass } from 'ioc';

import { ProductService, PRODUCT_SERVICE_NAME } from '../product';

export default function() {
    let ioc = new IoCContainer();
    
    ioc.register({
        [PRODUCT_SERVICE_NAME]: iocClass(ProductService)
    });
    
    return ioc;
}
