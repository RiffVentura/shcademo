import { useSelector } from "react-redux"
import { createStore } from "redux"

type Action = { type: 'search', searchTerm: string }
type State = {
    search: string,
}


const initialState: State = {
    search: '',
}

const productFiltersReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'search':
            return { ...state, search: action.searchTerm }
        default:
            return { ...state };
    }
}


export const store = createStore(productFiltersReducer)

export const useSearchSelector = () => {
    const search = useSelector<State, string>(state => state.search);
    return search;
}
