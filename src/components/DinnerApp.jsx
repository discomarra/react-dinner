import React, { Component } from "react";
import WorkArea from "./WorkArea.jsx";

import "./DinnerApp.css";

class DinnerApp extends Component {
	render() {
		return (
			<div className="DinnerApp">
				<div className="DinnerApp-header">
					<h2>Welcome to React Dinner! Table for two please :-)</h2>
				</div>
				<WorkArea/>
			</div>
		);
	}	
}

export default DinnerApp;
