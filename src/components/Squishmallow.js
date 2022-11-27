import "./Squishmallow.css"

// component for a squishmallow
function createSquishmallow(squishmallow) {
    return (
        <div className="squishmallow">
            <h3 className="name">{squishmallow.name}</h3>
            <img src={squishmallow.image} className="image" />
            <p className="description">{squishmallow.description}</p>
        </div>
    )
}

export default createSquishmallow;
