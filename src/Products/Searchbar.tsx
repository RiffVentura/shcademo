import { useTotalProducts } from "./hooks/useTotalProducts"
import { useFiltersSelector, useSearchSelector } from "../redux/store"
import { useDispatch } from "react-redux"

export const Searchbar = () => {
    const search = useSearchSelector()
    const { categories, brands } = useFiltersSelector()
    const dispatch = useDispatch();

    const { totalProducts } = useTotalProducts(search, brands, categories)
    return (
        <input
            type="text"
            className="searchbar"
            placeholder={`Search among ${totalProducts} products`}
            value={search}
            onChange={event => {
                dispatch({ type: 'search', searchTerm: event.target.value })
            }}
        />
    )
}