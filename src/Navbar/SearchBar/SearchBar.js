import ReactSearchBox from "react-search-box";

const SearchBar = () => {
    return ( 
    <div className="searchbar">
        <div className="input-container">
        <ReactSearchBox
        placeholder="Search Best Buy"
        value="Doe"
        data={[]}
        callback={(record) => console.log(record)}
        />
        </div>
    </div> 
    );
}
 
export default SearchBar;