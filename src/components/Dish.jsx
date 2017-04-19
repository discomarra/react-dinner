import React from "react";

export default ({onClick, name, id}) => {
	return (
		<li>
			<a href="#" onClick={onClick}> <span>{name}</span></a>
		</li>
	);
}