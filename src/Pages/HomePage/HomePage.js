import { connect } from "react-redux";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const HomePage = (props) => {
    const { homePageState } = props;
    
    console.log(homePageState)
    return ( 
    <div>
        {homePageState.loaded && <div>homepage</div>}
        {!homePageState.loaded && <div className="loading-spinner"><TailSpin color="#4255ff" ariaLabel="loading-indicator"/></div>}
    </div> );
}
 

const mapStateToProps = (state) => {
    return {
        homePageState: state.homePageState
    }
}
export default connect(mapStateToProps)(HomePage);