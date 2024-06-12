import { useSelector } from "react-redux"
import { createStore } from "redux"

type Action = { type: 'search', searchTerm: string }
    | { type: 'addCategory', category: string }
    | { type: 'removeCategory', category: string }
    | { type: 'addBrand', brand: string }
    | { type: 'removeBrand', brand: string }

type State = {
    search: string,
    categories: string[],
    brands: string[],
}


const initialState: State = {
    search: '',
    categories: [],
    brands: [],
}

const productFiltersReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'search':
            return { ...state, search: action.searchTerm }
        case 'addCategory':
            return { ...state, categories: [...state.categories, action.category] }
        case 'removeCategory':
            const filtreredCateogries = state.categories.filter(category => category !== action.category)
            return { ...state, categories: filtreredCateogries }
        case 'addBrand':
            return { ...state, brands: [...state.brands, action.brand] }
        case 'removeBrand':
            const filtreredBrands = state.brands.filter(brand => brand !== action.brand)
            return { ...state, brands: filtreredBrands }
        default:
            return { ...state };
    }
}


export const store = createStore(productFiltersReducer)

export const useSearchSelector = () => {
    const search = useSelector<State, string>(state => state.search);
    return search;
}

export const useFiltersSelector = () => {
    const search = useSelector<State, {categories: string[], brands:string[]}>(
        ({categories, brands}) => ({categories, brands})
    );
    return search;
}
