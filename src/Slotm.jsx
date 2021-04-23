import React from "react";
import "./index.css";
const Slotm = (props) => {
    //    let x = props.x;
    //    let y = props.y;
    //    let z = props.z;
    let { x, y, z } = props;
    if (x === y && y === z) {
        return (
            <div className="slot_inner"><h1 className="emo">
                {x} {y} {z}
            </h1>
                <h1 className="result">This One is JumanJi Match</h1>
                <hr />
            </div>
        );
    } else {
        return (
            <div className="slot_inner" ><h1 className="emo">
                {x} {y} {z}
            </h1>
                <h1 className="result">This One is not JumanJi Match</h1>
                <hr />
            </div>
        );

    }

}
export default Slotm;