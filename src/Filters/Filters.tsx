import { useState } from "react";
import { useCategories } from "./hooks/useCategories";
import { useBrands } from "./hooks/useBrands";

export const Filters = () => {
    const {categories} = useCategories();
    const {brands} = useBrands();
    const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<Option[]>([]);

    return (
        <section className="filters">
            <h3>Filters</h3>
            <hr/>
            <Filter
                title='Category'
                options={categories}
                selectedValues={selectedCategories}
                onChange={setSelectedCategories} />
            <Filter
                title='Brand'
                options={brands}
                selectedValues={selectedBrands}
                onChange={setSelectedBrands} />
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
    onChange: (newValues: Option[]) => void,
}

const Filter = ({ title, options, selectedValues, onChange }: FilterProps) => {
    const handleToggle = (option: Option, selected: boolean) => {
        if (!selected) {
            return onChange(selectedValues.filter(selected => selected.id !== option.id))
        }
        if (selected) {
            return onChange([...selectedValues, option])
        }
    }

    return (
        <div className="filter">
            <div className="filter_title">{title}</div>
            <ul className="filter_options">
                {options.map(option => {
                    const selected = selectedValues.some(selected => selected.id === option.id);
                    return (
                        <li key={option.id} className="filter_option">
                            <button
                                onClick={() => { handleToggle(option, !selected) }}
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