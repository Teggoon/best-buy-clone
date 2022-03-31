import YourLibraryDropdown from "./YourLibraryDropdown/YourLibraryDropdown";

const Navbar = () => {
    return (
    <div className="navbar">
        <h2 className="logo-title">Quizlet</h2>
        <h3 className="nav-bar-text">Home</h3>
        <YourLibraryDropdown />
    </div>);
}

export default Navbar;