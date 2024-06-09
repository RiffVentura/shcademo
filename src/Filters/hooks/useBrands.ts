import { useEffect, useState } from "react"
import { allProducts } from "../../Products/hooks/useProducts"

type Brand = {
    id: string,
    name: string
}

export const useBrands = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchBrands();
            setBrands(data);
            setLoading(false);
        };
        fetchData();
    }, [])

    return { brands, isLoading }
}

function fetchBrands(): Promise<Brand[]> {
    return new Promise((resolve) => setTimeout(() => resolve(getBrands()), 500));
}

export function getBrands(): Brand[] {
    return Array.from(new Set(allProducts.map(product => product.brand))).map(name => ({ id: name, name }));
}