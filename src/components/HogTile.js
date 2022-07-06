import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogTile({ hog }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleShowDetails() {
        setShowDetails((showDetails) => !showDetails);
    }

    return (
        <div class="ui link cards">
            <div class="card">
                <div class="image">
                    <img src={hog.image} />
                </div>
                <div class="content">
                    <div class="header">{hog.name}</div>
                    <div class="description">
                        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    </div>
                    <div class="description">
                        Specialty: {hog.specialty}
                    </div>
                </div>
                <div class="extra content">
                    {showDetails ? <HogDetails hog={hog}/> : null}
                </div>
                <button className="ui button" onClick={handleShowDetails}>
                    {showDetails ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
            )
}

export default HogTile;

/*
<div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/matthew.png">
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
*/