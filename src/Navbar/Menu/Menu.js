import menuLines from "../../assets/images/menu.png"
import { connect } from "react-redux";

const Menu = ({expanded}) => {
    return ( 
    <div className="menu nav-element">
        {!expanded && <img src={menuLines} className="menu-image"/>}
        <h2>Menu</h2>
    </div> 
    );
}

const mapStateToProps = (state) => {
    return {
        expanded: state.navBar.menu.expanded
    }
}
 
export default connect(mapStateToProps)(Menu);