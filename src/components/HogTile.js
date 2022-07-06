import React from "react";

function HogTile({ hogInfo, className, nameId }) {
    return (
        <>
            <div class="ui link cards" id={nameId}>
                <div class="card">
                    <div class="image">
                        <img src={hogInfo.image} />
                    </div>
                    <div class="content">
                        <div class="header">{hogInfo.name}</div>
                        <div class="meta">
                            <p class={className}>Greased: {hogInfo.greased ? "Yes" : "No"}</p>
                        </div>
                        <div class="description">
                            <p class={className}>Specialty: {hogInfo.specialty}</p>
                        </div>
                    </div>
                    <div class="extra content">
                        <span class="right floated" className={className}>
                            Weight: {hogInfo.weight}
                        </span>
                        <span class={className}>
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