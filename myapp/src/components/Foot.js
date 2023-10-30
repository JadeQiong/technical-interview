import React from "react";

function Foot(){
    return (
        <div className="foot">
            <div className="footer-block"> 
                <h2> Week Overview </h2>
                <hr></hr>
                <p> 
                    + new climbers <br></br>
                    + traffic  <br></br>
                    - difficult of climbs completed <br></br>
                    + content sharing  
                </p>
            </div>
            <div className="footer-block"> 
                <h2> Suggestions </h2>
                <hr></hr>
                    Set higher difficulty <br></br>
                    <a href="https://github.com/JadeQiong/technical-interview">Repost climber content (clickable)</a>
            </div>
            <div className="footer-block"> 
                <h2> Month Overview </h2>
                <hr></hr>
                <p>
                + new climbers  <br></br>
                - traffic <br></br>
                = difficult of climbs completed <br></br>
                + content sharing <br></br>
                </p>
            </div>
        </div>
    )
}
export default Foot;
