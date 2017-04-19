import React from "react";

import DishSearch from "./DishSearch.jsx";
import DishAdd from "./DishAdd.jsx";
import DishList from "./DishList.jsx";

let Menu = ({...props, dishes}) => {
	return (
		<div className="Menu">
			<h3>Menu</h3>
			<DishSearch {...props}/>
			<DishAdd {...props}/>
			<DishList {...props} dishes={dishes}/>
		</div>
	);
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onDishClick: (id) => {
// 			dispatch(actions.addDishToTableActionCreator(id));
// 		},
// 		onAddClick: (dishName) => {
// 			dispatch(actions.addNewDishActionCreator(dishName));
// 		},
// 		onSearch: (crit) => {
// 			dispatch(actions.filterDishesActionCreator(crit));
// 		}
// 	};
// };

export default Menu;