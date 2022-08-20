import React, {useState} from "react";

import Nav from "./Nav";
import HogInfo from "./HogInfo";
import HogContainer from "./HogContainer";

import hogs from "../porkers_data";

function App() {
	const [hogToDisplay, setHogToDisplay] = useState({});

	function handleHogClick(hog) {
		setHogToDisplay(hog);
	}

	return (
		<div className="App">
			<Nav />
			<HogContainer hogs={hogs} handleHogClick={handleHogClick}/>
			<HogInfo hogToDisplay={hogToDisplay}/>
		</div>
	);
}

export default App;
