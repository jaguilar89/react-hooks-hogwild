import React from "react";
import HogTile from "./HogTile";

function HogsContainer({ hogData }) {
    const hogTiles = hogData.map((hog) => {
        return (
            <div className="pigTiles">
                <HogTile hogInfo={hog} />
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