import menuLines from "../../assets/images/menu.png"

const Menu = () => {
    return ( 
    <div className="menu nav-element">
        <img src={menuLines} className="menu-image"/>
        <h2>Menu</h2>
    </div> 
    );
}
 
export default Menu;