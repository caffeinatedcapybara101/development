import React, { useState } from 'react';
import "./SideNav.css"
import CartItem from "./CartItem"
import { TfiShoppingCart } from "react-icons/tfi";
import { IoIosClose } from "react-icons/io"

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
            <TfiShoppingCart borderWidth={1} size={40} id="cart-button" onClick={handleShow} />
            <div className={(show) ? "sidebar-open" : "sidebar-close"}>
                <div id="sidebar-header">
                    <h3>Cart</h3>

                    <IoIosClose size={50} id="nav-close-button" onClick={handleClose} />
                </div>
                <div>
                    <div id="item-headers">
                        <div>Item Name</div>
                        <div>Size</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Remove</div>
                    </div>
                    <div id="cart-items">
                        {items.map(item => (
                            <CartItem item={item} adjust={props.adjust} />
                        ))}
                    </div>
                    <div id="total">Total: ${total.toFixed(2)}</div>
                </div>
            </div>
        </>
    );
}

export default SideNav;