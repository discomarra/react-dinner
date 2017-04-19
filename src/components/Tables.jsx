import React from "react";
import Table from "./Table.jsx";

const Tables = ({onDishSelected, onTableSelected, tables}) => {
	const tablesArray = tables.map((table, index) => {
		return (
			<Table 
				key={table.id} 
				table={table} 
				onTableClick={() => onTableSelected(table)}
				onDishClick={(dishId) => onDishSelected(table, dishId)}
			/>
		);
	});

	return (
		<div className="Tables">
			{tablesArray}
		</div>
	);
};

export default Tables;