import React, {Component} from 'react'

export class ProductPreview extends Component {
    render() {
        const {product} = this.props;
        
        if (product) {
            return (
                <article>
                    <div>{product.name}</div>
                </article>
            );
        }
        
        return null;
    }
}

