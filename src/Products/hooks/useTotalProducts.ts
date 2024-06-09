import { useProducts } from "./useProducts";

export const useTotalProducts = (search: string = '', brands: string[] = [], categories: string[] = []) => {
    const { products, isLoading } = useProducts(search, brands, categories);

    return { totalProducts: products.length, isLoading }
}
