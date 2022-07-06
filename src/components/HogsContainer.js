import React, { useState } from "react";
import HogTile from "./HogTile";

function HogsContainer({ hogData }) {
    //const [selectedHog, setSelectedHog] = useState("")

    const hogTiles = hogData.map((hog) => {
        return (
            <div className="pigTile" id={hog.name}>
                <HogTile
                    key={hog.name} 
                    hogInfo={hog}
                    nameId={hog.name}
                />
            </div>
        )
    });

    return (
        <div className="ui grid">
            {hogTiles}
        </div>
    )
};

export default HogsContainer;