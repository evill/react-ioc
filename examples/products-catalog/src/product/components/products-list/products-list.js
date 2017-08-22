import React, {Component} from 'react'
import { ProductPreview } from '../product-preview'

export class ProductsList extends Component {
    render() {
        const {products, loading, error} = this.props;
        let content = null;

        if (loading) {
            content = <div>Loading</div>
        } else if (error) {
            content = <div>{error.message}</div>
        } else if (Array.isArray(products)) {
            if (products.length > 0) {
                content = this.renderProducts();
            } else {
                content = <div>Products list is empty</div>
            }
        }
        
        return (
            <div>
                <div>Products list</div>
                <div>{content}</div>
            </div>
        );
    }

    renderProducts() {
        const {products} = this.props;

        return (
            <div>
                {
                    products.map((product, index) => <ProductPreview key={index} product={product}/>)
                }
            </div>
        );
    }
}
