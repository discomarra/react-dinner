import React from "react";
import TablesArea from "./TablesArea.jsx";
import Menu from "./Menu.jsx";
import Separator from "./Separator.jsx";
import {v4} from "uuid";

export default class WorkArea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: [
				{id: 1, name: "Fish"},
				{id: 2, name: "Veal"},
				{id: 3, name: "Pork"},
				{id: 4, name: "Salad 1"},
				{id: 5, name: "Salad 2"},
				{id: 6, name: "Wine"},
				{id: 7, name: "Juice"},
				{id: 8, name: "Beer"},
				{id: 9, name: "Water"},
			],
			tables: [
				{id: 1, number: 1, isSelected: false, dishes: []},
				{id: 2, number: 2, isSelected: false, dishes: []},
				{id: 3, number: 3, isSelected: false, dishes: []},
				{id: 4, number: 4, isSelected: false, dishes: []},
				{id: 5, number: 5, isSelected: false, dishes: []},
				{id: 6, number: 6, isSelected: false, dishes: []},
				{id: 7, number: 7, isSelected: false, dishes: []},
				{id: 8, number: 8, isSelected: false, dishes: []}
			],
			crit: ""
		};

		this.selectTable = this.selectTable.bind(this);
		this.addDishToSelectedTable = this.addDishToSelectedTable.bind(this);
		this.removeDishFromTable = this.removeDishFromTable.bind(this);
	}

	selectTable(tableParam) {
		this.setState((prevState, props) => ({
			tables: prevState.tables.map((table) => {
				if(table.id !== tableParam.id) {
					return {...table, isSelected: false};
				}

				return {...table, isSelected: true};
			})
		}));
	}

	addDishToSelectedTable(dish) {
		this.setState((prevState, props) => ({
			tables: prevState.tables.map((table) => {
				if(table.isSelected) {
					table.dishes = [...table.dishes, {id: v4(), dish}];
				}

				return table;
			})
		}));
	}

	removeDishFromTable(tableParam, dishId) {
		this.setState((prevState, props) => ({
			tables: prevState.tables.map((table) => {
				if(tableParam.id !== table.id) {
					return table;
				}

				table.dishes = table.dishes.filter((dishItem) => dishId !== dishItem.id);
				return table;
			})
		}));
	}

	render() { 
		return (
			<div className="WorkArea">
				<TablesArea 
					tables={this.state.tables}
					onTableSelected={this.selectTable}
					onDishSelected={this.removeDishFromTable}
				/>
				<Separator />
				<Menu 
					dishes={this.state.dishes} 
					crit={this.state.crit}
					onDishSelected={this.addDishToSelectedTable}/>
			</div>
		);
	}
};