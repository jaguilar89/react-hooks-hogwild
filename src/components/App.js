import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogsContainer from "./HogsContainer";


import hogs from "../porkers_data";

function App() {
	const [sortBy, setSortBy] = useState("name");
	const [showGreased, setShowGreased] = useState(false);

	const hogsToDisplay = hogs
		.filter(hog => showGreased ? hog.greased : true) //if greased, show greased, otherwise return true, which will show all cards
		.sort((hogA, hogB) => {
			if (sortBy === "weight") {
				return hogA.weight - hogB.weight;
			} else {
				return hogA.name.localeCompare(hogB.name);
			}
		})

	return (
		<div className="App">
			<Nav />
			<Filter 
				sortBy={sortBy}
				setSortBy={setSortBy}
				showGreased={showGreased}
				setShowGreased={setShowGreased}
			/>
			<HogsContainer hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;

