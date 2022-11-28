import "./Squishmallow.css"

// component for a squishmallow
function Squishmallow(props) {
    const squishmallow = props.item
    const changeSquishmallowData = props.change
    return (
        <div className="squishmallow">
            <h3 className="name">{squishmallow.name}</h3>
            <div className="card">
                <img src={process.env.PUBLIC_URL + squishmallow.image} className="image" />
                <div className="info">
                    <p className="info-heading">
                        Category:
                        <span className="info-description">{" " + squishmallow.category}</span>
                    </p>
                    <p className="info-heading">
                        Year:
                        <span className="info-description">{" " + squishmallow.year}</span>
                    </p>
                    <p className="info-heading">
                        Sizes:
                        <span className="info-description">
                            {squishmallow.size.map((size) => (
                                <button type="button" className={(squishmallow.currSize == size) ? "selected-size" : "unselected-size"} onClick={() => changeSquishmallowData(squishmallow.name, size)} >
                                    {size}
                                </button>
                            ))}
                        </span>
                    </p>
                    <p className="info-heading">
                        Price:
                        <span className="info-description">{" $" + squishmallow.price}</span>
                    </p>
                    <button onClick={() => props.addCart(squishmallow.name, squishmallow.currSize, squishmallow.price)}>Add to Cart</button>
                </div>
            </div>
        </div >
    )
}

export default Squishmallow;
