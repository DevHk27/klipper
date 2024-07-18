import React from "react";
import './home.css';
import Buttonselector from "../../components/buttonselector/Buttonselector";

const Home = () => {
    return (
        <div className="Home">
            <div className="left-half">
                <Buttonselector
                placeholder= "left half"
                />
            </div>
            <div className="right-half">
            <Buttonselector
                placeholder= "right half"
                />
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Home;