import React from "react";
import Tables from "./Tables.jsx";

export default ({...props, tables}) => {
	return (
		<div className="TablesArea">
			<h3>Tables</h3>
			<Tables {...props} tables={tables}/>
		</div>
	);
};