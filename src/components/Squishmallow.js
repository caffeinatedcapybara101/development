import "./Squishmallow.css"

// component for a squishmallow
function createSquishmallow(squishmallow, addToFavorites) {
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
                        Collector Number:
                        <span className="info-description">{" " + squishmallow.collectorNum}</span>
                    </p>
                    <p className="info-heading">
                        Sizes:
                        <span className="info-description">{" " + squishmallow.size}</span>
                    </p>
                    <button onClick={() => addToFavorites(squishmallow)}>Add to Favories</button>
                </div>
            </div>
        </div>
    )
}

export default createSquishmallow;
