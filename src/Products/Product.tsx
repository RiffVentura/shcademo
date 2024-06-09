import { useState } from "react";
import { Product as ProductModel } from "./model";

type ProductProps = { productData: ProductModel }

export const Product = ({ productData }: ProductProps) => {
    const [selected, setSelected] = useState(false);

    const cssClasses = [
        'product',
        selected ? 'selected' : '',
    ].join(' ');
    
    return (
        <article className={cssClasses} onClick={() => setSelected(selected => !selected)}>
            <img src={productData.image} alt={productData.title} />
            <div className="product_details">
                <h4 className="product_title">{productData.title}</h4>
                <div className="taglist">
                    <span className="tag brand">{productData.brand}</span>
                    <br />
                    <span className="tag category">{productData.category}</span>
                </div>
            </div>
        </article>
    );
}