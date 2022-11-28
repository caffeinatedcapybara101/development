const CartItem = (props) => {
    const item = props.item
    const name = item.item.split(", ")[0]
    const size = item.item.split(", ")[1]

    return (
        <div className="cart-item">
            <div>{name}</div>
            <div>{size}</div>
            <div>
                <button onClick={() => props.adjust(item.item, item.basePrice, "-", 1)}>-</button>
                {item.number}
                <button onClick={() => props.adjust(item.item, item.basePrice, "+", 1)}>+</button>
            </div>
            <div>{item.price.toFixed(2)}</div>
            <button onClick={() => props.adjust(item.item, item.basePrice, "-", item.number)}>Delete</button>
        </div>
    )
}

export default CartItem;