import React from "react";
import HogTile from "./HogTile";


function HogsContainer({ hogs }) {
    return (
        <div className="ui grid">
            {hogs.map((hog) => {
                return <HogTile key={hog.name} 
                                hog={hog} 
                        />
            })}
        </div>
    )
}


export default HogsContainer;