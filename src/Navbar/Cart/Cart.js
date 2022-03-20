import cartImage from "../../assets/images/cart.png"

const Cart = () => {
    return (<div className="cart nav-element">
        <img src={cartImage} className="cart-image"/>
        <h2>Cart</h2>
    </div>);
}

export default Cart;