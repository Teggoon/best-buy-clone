import ReactSearchBox from "react-search-box";
import magnifying_glass from "../../assets/images/magnifying_glass.png"

const SearchBar = () => {
    return ( 
    <div className="searchbar">
        <div className="input-container">
        <ReactSearchBox
        placeholder="Search Best Buy"
        value="Doe"
        data={[]}
        callback={(record) => console.log(record)}
        leftIcon={<img src={magnifying_glass} className="magnifying-glass-image"/>}
        iconBoxSize="34px"
        />
        </div>
    </div> 
    );
}
 
export default SearchBar;