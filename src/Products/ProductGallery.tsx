import { useProductFitlers } from "../Filters/reducers/productFiltersReducer";
import { Loader } from "../Loader";
import { Product } from "./Product"
import { useProducts } from "./hooks/useProducts"

export const ProductGallery = () => {
    const { state } = useProductFitlers()
    const { products, isLoading } = useProducts(
        state.search,
    );

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