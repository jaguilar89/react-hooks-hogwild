import React from "react";

function Filter({ sortBy, setSortBy, showGreased, setShowGreased }) {
    function handleSortBy(event) {
        setSortBy(event.target.value)
    };

    function handleToggleGreased(event) {
        setShowGreased(event.target.checked)
    };

    return (
        <div className="filterWrapper">
            <label htmlFor="sort">Sort By: </label>
            <select name="filter" id="filter" value={sortBy} onChange={handleSortBy}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            <label htmlFor="greased" style={{paddingLeft: "3rem"}}>Greased Only: </label>
            <input type="checkbox" style={{marginLeft: "0.5rem"}} checked={showGreased} onChange={handleToggleGreased}></input>
        </div>
    )
};

export default Filter;