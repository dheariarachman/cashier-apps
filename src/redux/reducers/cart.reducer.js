import { combineReducers } from "redux";
import { ADD_ITEM, SUM_ITEMS } from "../types";

const INITAL_STATE = {
	selected: [],
	totalPrice: 0,
};

const cartReducer = (state = INITAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			let newItem = { ...action.payload, quantity: 0 };
			return {
				...state,
				selected: [...state.selected, newItem],
			};

		default:
			return state;
	}
};

export default combineReducers({
	carts: cartReducer,
});
