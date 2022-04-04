import { connect } from "react-redux";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";

const HomePage = (props) => {
    const { homePageState, sets, setUserSets } = props;
    
    useEffect(async () => {
        const setsResponse = await axios.get("http://localhost:3000/getUserSets");
        console.log(setsResponse.data);
        setUserSets(setsResponse.data)
    }, [])
    return ( 
    <div>
        {JSON.stringify(sets)}
        {homePageState.loaded && <div>homepage</div>}
        {!homePageState.loaded && <div className="loading-spinner"><TailSpin color="#4255ff" ariaLabel="loading-indicator"/></div>}
    </div> );
}
 

const mapStateToProps = (state) => {
    return {
        homePageState: state.homePageState,
        sets: state.sets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserSets: (setsObject) => {dispatch({
            type: "SET_USER_SETS", 
            payload: {
                setsObject
            }
        })}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);