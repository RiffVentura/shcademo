import { Loader } from "../Loader";
import { Product } from "./Product"
import { useProducts } from "./hooks/useProducts"

export const ProductGallery = () => {
    const {products, isLoading} = useProducts();

    return <div className="product_gallery">
        {isLoading && <Loader/>}
        {
            products.map(product => <Product key={product.id} productData={product} />)
        }
    </div>
}