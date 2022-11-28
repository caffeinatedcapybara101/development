import React, { useState } from 'react';
import "./SideNav.css"
import CartItem from "./CartItem"

function SideNav(props) {
    const items = props.items

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let total = 0
    for (let item of items) {
        total = total + item.price
    }

    return (
        <>
            <button id="open-button" onClick={handleShow} className="me-2">
                Open
            </button>
            <div className={(show) ? "sidebar-open" : "sidebar-close"}>
                <div id="sidebar-header">
                    <h3>Cart</h3>
                    <button onClick={handleClose}>Close</button>
                </div>
                <div>
                    <div className="cart-item">
                        <div>Item Name</div>
                        <div>Size</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Remove</div>
                    </div>
                    {items.map(item => (
                        <CartItem item={item} adjust={props.adjust} />
                    ))}
                    <div>Total: {total.toFixed(2)}</div>
                </div>
            </div>
        </>
    );
}

export default SideNav;