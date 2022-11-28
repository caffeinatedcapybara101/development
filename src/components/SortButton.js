import "./FilterSort.css"

const SortButton = ({ id, sortProp, onClick }) => {
    return (
        <div>
            <input type="radio" id={id} checked={sortProp == id} onClick={onClick}></input>
            <label htmlFor={id}>{id}</label>
        </div>
    )
}

export default SortButton;