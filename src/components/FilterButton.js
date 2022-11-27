const FilterButton = ({ className, id, onClick }) => {
    return (
        <div>
            <input type="checkbox" className={className} id={id} onClick={onClick}></input>
            <label>{id}</label>
        </div>
    )
}

export default FilterButton;