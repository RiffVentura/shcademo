import { useTotalProducts } from "./hooks/useTotalProducts"
import { useSearchSelector } from "../redux/store"
import { useDispatch } from "react-redux"

export const Searchbar = () => {
    const search = useSearchSelector()
    const dispatch = useDispatch();

    const { totalProducts } = useTotalProducts(search)
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