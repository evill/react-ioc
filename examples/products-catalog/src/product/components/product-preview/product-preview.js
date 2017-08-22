import React, {Component} from 'react'

export class ProductPreview extends Component {
    render() {
        const {product} = this.props;
        
        if (product) {
            return (
                <articale>
                    <div>{product.title}</div>
                </articale>
            );
        }
        
        return null;
    }
}
