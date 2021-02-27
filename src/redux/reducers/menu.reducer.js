import { combineReducers } from "redux";

const INITAL_STATE = {
	menu: [
		{
			id: 5,
			title: "Sate Taichan",
			price: 12500,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 6,
			title: "Martabak",
			price: 22500,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 7,
			title: "Karaoket",
			price: 5000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 8,
			title: "Sop Buah",
			price: 15000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 9,
			title: "Jus Mangga",
			price: 10000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 10,
			title: "Sate Taichan",
			price: 12500,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 11,
			title: "Martabak",
			price: 22500,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 12,
			title: "Karaoket",
			price: 5000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 13,
			title: "Sop Buah",
			price: 15000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 14,
			title: "Jus Mangga",
			price: 10000,
			imageUri: "https://picsum.photos/100/100",
		},
	],
	totalPrice: 0,
};

const menuReducer = (state = INITAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	menus: menuReducer,
});
