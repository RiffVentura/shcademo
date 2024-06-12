import { Loader } from "../Loader";
import { Product } from "./Product"
import { useProducts } from "./hooks/useProducts"

export const ProductGallery = () => {
    const {products, isLoading} = useProducts();

    return (<>
        {!isLoading && (<h3>Total {products.length}</h3>)}
        <div className="product_gallery">
            {isLoading && <Loader />}
            {
                !isLoading && products.map(product => <Product key={product.id} productData={product} />)
        }
    </div>
    </>)
}