import React from "react";
import {v4} from "uuid";

export default ({table, onTableClick, onDishClick}) => {
	const dishes = table.dishes.map((dishItem, index) => {
		return (
			<li key={v4()}><a href="#" onClick={() => onDishClick(dishItem.id)}>{dishItem.dish.name}</a></li>
		);
	});

	return (
		<div className={table.isSelected ? "Table Table-selected" : "Table"} onClick={onTableClick}>
			<div className="Table-dishes">
				<ol>
					{dishes}
				</ol>
			</div>
			<div className="Table-number">
				{table.number}
			</div>
		</div>
	);
}