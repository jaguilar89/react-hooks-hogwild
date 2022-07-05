import React from "react";

function HogTile({ hogInfo }) {
    return (
        <>
            <div class="ui link cards">
                <div class="card">
                    <div class="image">
                        <img src={hogInfo.image} />
                    </div>
                    <div class="content">
                        <div class="header">{hogInfo.name}</div>
                        <div class="meta">
                            <p>Greased: {hogInfo.greased ? "Yes" : "No"}</p>
                        </div>
                        <div class="description">
                            Specialty: {hogInfo.specialty}
                        </div>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            Weight: {hogInfo.weight}
                        </span>
                        <span>
                            <i class="certificate icon"></i>
                            Highest medal: {hogInfo["highest medal achieved"]}
                        </span>
                    </div>
                </div>
            </div>
        </>
        )
};

            export default HogTile;