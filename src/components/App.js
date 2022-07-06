import React, { useState } from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";

import hogs from "../porkers_data";

function App() {
	const [hogData, setHogData] = useState(hogs);
	
	return (
		<div className="App">
			<Nav />
			<HogsContainer hogData={hogData} />
		</div>
	);
}

export default App;


//TODO: Allow the user to filter the hogs that are greased