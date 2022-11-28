import "./FilterSort.css"

const FilterButton = ({ className, id, onClick, select }) => {
    let check = true
    if (select.indexOf(id) < 0) {
        check = false
    }

    return (
        <div>
            <input type="checkbox" className={className} id={id} onClick={onClick} checked={check}></input>
            <label>{id}</label>
        </div>
    )
}

export default FilterButton;