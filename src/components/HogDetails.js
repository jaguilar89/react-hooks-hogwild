import React from "react";

function HogDetails({ hog }) {
    return (
        <>
            <span class="right floated">
                Weight: {hog.weight}
            </span>
            <span>
                <i class="certificate icon"></i>
                Highest Medal: {hog["highest medal achieved"]}
            </span>
        </>
    )
}

export default HogDetails;