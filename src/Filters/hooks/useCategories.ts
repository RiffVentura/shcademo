import { useEffect, useState } from "react"
import { allProducts } from "../../Products/hooks/useProducts"

type Category = {
    id: string,
    name: string
}

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchCategories();
            setCategories(data);
            setLoading(false);
        };
        fetchData();
    }, [])

    return { categories, isLoading }
}

function fetchCategories(): Promise<Category[]> {
    return new Promise((resolve) => setTimeout(() => resolve(getCategories()), 500));
}

export function getCategories(): Category[] {
    return Array.from(new Set(allProducts.map(product => product.category))).map(name => ({ id: name, name }));
}