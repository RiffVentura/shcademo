import { useState } from "react"
import { useTotalProducts } from "./hooks/useTotalProducts"

export const Searchbar = () => {
    const { totalProducts } = useTotalProducts()
    const [search, setSearch] = useState('')
    return (
        <input
            type="text"
            className="searchbar"
            placeholder={`Search among ${totalProducts} products`}
            value={search}
            onChange={event => { setSearch(event.target.value) }}
        />
    )
}