import "./FilterSort.css"

const SortButton = ({ id, checked, onClick }) => {
    return (
        <div>
            <input type="radio" id={id} checked={checked == id} onClick={onClick}></input>
            <label htmlFor={id}>{id}</label>
        </div>
    )
}

export default SortButton;