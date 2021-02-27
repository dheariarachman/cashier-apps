import { ADD_ITEM, SUM_ITEMS } from "../types";

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const calculatePrices = () => ({
	type: SUM_ITEMS,
});
