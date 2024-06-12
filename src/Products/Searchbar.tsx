import { useTotalProducts } from "./hooks/useTotalProducts"
import { useProductFitlers } from "../Filters/reducers/productFiltersReducer"

export const Searchbar = () => {
    const { state, dispatch } = useProductFitlers()
    const { totalProducts } = useTotalProducts(state.search)

    return (
        <input
            type="text"
            className="searchbar"
            placeholder={`Search among ${totalProducts} products`}
            value={state.search}
            onChange={event => { dispatch({type: 'search', searchTerm: event.target.value}) }}
        />
    )
}