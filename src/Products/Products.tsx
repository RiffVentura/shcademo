import { ProductGallery } from "./ProductGallery"
import { Searchbar } from "./Searchbar"

export const Products = () => {
    return (
        <section className="products">
            <Searchbar />
            <hr />
            <ProductGallery />
        </section>
    )
}

