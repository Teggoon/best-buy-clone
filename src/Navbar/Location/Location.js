import locationImage from "../../assets/images/location.png"

const Location = () => {
    return (<div className="location nav-element">
    <img src={locationImage} className="location-image"/>
        <h2>SW Tucson</h2>
    </div>);
}

export default Location;