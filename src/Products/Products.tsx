import { ProductFiltersProvider } from "../Filters/reducers/productFiltersReducer"
import { ProductGallery } from "./ProductGallery"
import { Searchbar } from "./Searchbar"

export const Products = () => {
    return (
        <section className="products">
            <ProductFiltersProvider>
                <Searchbar />
                <hr />
                <ProductGallery />
            </ProductFiltersProvider>
        </section>
    )
}

