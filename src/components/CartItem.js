import "./CartItem.css"
import { BiTrash } from "react-icons/bi"

const CartItem = (props) => {
    const item = props.item
    const name = item.item.split(", ")[0]
    const size = item.item.split(", ")[1]

    return (
        <div className="single-item">
            <div className="item-name">{name}</div>
            <div className="item-size">{size}</div>
            <div className="item-quantity">
                <button className="item-adjust" onClick={() => props.adjust(item.item, item.basePrice, "-", 1)}>-</button>
                {item.number}
                <button className="item-adjust" onClick={() => props.adjust(item.item, item.basePrice, "+", 1)}>+</button>
            </div>
            <div className="item-price">${item.price.toFixed(2)}</div>
            <div className="item-delete">
                <BiTrash size={22} className="trash-button" onClick={() => props.adjust(item.item, item.basePrice, "-", item.number)} />
            </div>
        </div>
    )
}

export default CartItem;