import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

function Header(){
    return (
        <header className="header">
            <div className="header-left"> 
                <div className="header-text">
                    <div className="header-text">
                        <img src="NYU-sportlogo.png" className="header-image"/>
                        <h3>Palladium Dashboard</h3>
                    </div>
                    <h2 className="header--title">Welcome Back Dan</h2>
                </div>

                <div className="header-dropcontainer">
                    <Dropdown options={options} placeholder="All" className="header-dropdown" />
                    <Dropdown options={options} placeholder="This week" className="header-dropdown" />
                </div>

            </div>

            <div className="header-right">
                <div> 
                    Tags Today
                    <div className="header-tag">56</div>
                </div>
            
                <div className="header-info">
                    Next wall reset
                    09/06 - 9pm
                </div>
            </div>
        </header>
    )
}
export default Header;

