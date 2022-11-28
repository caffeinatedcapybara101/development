import "./FilterSort.css"

const FilterButton = ({ className, id, onClick, select }) => {
    let check = false
    for (let filter of select) {
        if (filter == id) {
            check = true
            break
        }
    }

    return (
        <div>
            <input type="checkbox" className={className} id={id} onClick={onClick} checked={check}></input>
            <label>{id}</label>
        </div>
    )
}

export default FilterButton;