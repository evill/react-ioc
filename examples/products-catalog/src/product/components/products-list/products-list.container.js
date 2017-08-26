import React, {Component} from 'react'
import { withIoc } from 'react-ioc';
import { ProductsList } from './products-list'
import { PRODUCT_SERVICE_NAME } from '../../product.constants';

export const ProductsListContainer = withIoc(
    class extends Component {
        static $inject = [ PRODUCT_SERVICE_NAME ];
        
        constructor(props) {
            super(props);
            this.state = {
                products: null,
                loading: false,
                error: null
            };
        }
    
        componentDidMount() {
            const {productsService} = this.props;
            
            productsService.getList().then((products) => {
                this.setState({ products, loading: false });
            }).catch((error) => {
                this.setState({ error, loading: false });
            });
    
            this.setState({ loading: true });
        }
        
        render() {
            const {products, loading, error} = this.state;
    
            return (
                <ProductsList
                    products={products}
                    loading={loading}
                    error={error}
                />
            );
            
        }
    }
);

