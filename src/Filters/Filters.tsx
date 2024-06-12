import { useDispatch } from "react-redux";
import { useFiltersSelector } from "../redux/store";
import { useBrands } from "./hooks/useBrands";
import { useCategories } from "./hooks/useCategories";

export const Filters = () => {
    const { categories } = useCategories();
    const { brands } = useBrands();
    const {
        categories: selectedCategories,
        brands: selectedBrands,
    } = useFiltersSelector();
    const dispatch = useDispatch();

    const categoriesAsOptions = selectedCategories.map(category => ({ id: category, name: category }))
    const brandsAsOptions = selectedBrands.map(brand => ({ id: brand, name: brand }))

    return (
        <section className="filters">
            <h3>Filters</h3>
            <hr />
            <Filter
                title='Category'
                options={categories}
                selectedValues={categoriesAsOptions}
                onChange={(category, selected) => {
                    if (selected) {
                        dispatch({ type: 'addCategory', category })
                    } else {
                        dispatch({ type: 'removeCategory', category })
                    }
                }} />
            <Filter
                title='Brand'
                options={brands}
                selectedValues={brandsAsOptions}
                onChange={(brand, selected) => {
                    if (selected) {
                        dispatch({ type: 'addBrand', brand })
                    } else {
                        dispatch({ type: 'removeBrand', brand })
                    }
                }} />
        </section>
    );
}

type Option = {
    id: string,
    name: string,
}

type FilterProps = {
    title: string,
    options: Option[],
    selectedValues: Option[],
    onChange: (id: string, selected: boolean) => void,
}

const Filter = ({ title, options, selectedValues, onChange }: FilterProps) => {
    return (
        <div className="filter">
            <div className="filter_title">{title}</div>
            <ul className="filter_options">
                {options.map(option => {
                    const selected = selectedValues.some(selected => selected.id === option.id);
                    return (
                        <li key={option.id} className="filter_option">
                            <button
                                onClick={() => { onChange(option.id, !selected) }}
                                className={selected ? 'selected' : ''}
                            >{option.name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}