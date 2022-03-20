import SearchBar from "./SearchBar/SearchBar";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";
import logoImage from "../assets/images/logo.png"

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="top-row">
            <a href="/"><img src={logoImage} className="logo-image"/></a>
            <Menu/>
            <SearchBar />
            <h2>SW Tucson</h2>
            <Cart />
        </div>
    </div>);
}

export default Navbar;