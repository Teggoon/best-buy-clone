import YourLibraryDropdown from "./YourLibraryDropdown/YourLibraryDropdown";

const Navbar = () => {
    return (
    <div className="navbar">
        <h2 className="logo-title">Quizlet</h2>
        <h3 className="nav-bar-text">Home</h3>
        <YourLibraryDropdown />
        <button className="btn create-button navbar-button">Create study set</button>
        <button className="btn upgrade-button navbar-button">Upgrade: Free 7-day trial</button>
    </div>);
}

export default Navbar;