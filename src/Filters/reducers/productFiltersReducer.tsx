import { ReactNode, createContext, useContext, useReducer } from "react";

type Action = { type: 'search', searchTerm: string};
type Dispatch = (action: Action) => void;
type State = {
    search: string,
}
type ProductFiltersProviderProps = {children: ReactNode}

const ProductFiltersContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState: State = {
    search: '',
}

const productFiltersReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'search': {
            return { search: action.searchTerm}
        }
        default: {
            throw new Error(`Wesh ?!?! ${action.type}`)
        }
    }
}

export const ProductFiltersProvider = ({children}: ProductFiltersProviderProps) => {
    const [state, dispatch] = useReducer(productFiltersReducer, initialState);

    const value = {state, dispatch}
    return <ProductFiltersContext.Provider value={value}>{children}</ProductFiltersContext.Provider>
}

export const useProductFitlers = () => {
    const context = useContext(ProductFiltersContext)
    if (context === undefined) {
        throw new Error('useProductFilters must be used within a ProductFiltersProvider');
    }

    return context;
}
