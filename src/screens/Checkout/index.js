import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HistoryItem } from "../../components";
import { colors } from "../../utils";

const Checkout = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			setData([
				{
					_id: "6033bb62b91d8d6c526f24e2",
					price: "$1,810.59",
					picture: "http://placehold.it/32x32",
					quantity: 6,
					menuName: "Fernandez",
				},
				{
					_id: "6033bb623ee1de7f4938b5b1",
					price: "$2,761.52",
					picture: "http://placehold.it/32x32",
					quantity: 5,
					menuName: "Mercedes",
				},
				{
					_id: "6033bb6228040cd71fdb5dd2",
					price: "$2,169.26",
					picture: "http://placehold.it/32x32",
					quantity: 5,
					menuName: "Garner",
				},
				{
					_id: "6033bb62540d9b78b1e9690e",
					price: "$3,070.71",
					picture: "http://placehold.it/32x32",
					quantity: 6,
					menuName: "Wright",
				},
				{
					_id: "6033bb62722b558d0b76cc9a",
					price: "$1,158.58",
					picture: "http://placehold.it/32x32",
					quantity: 2,
					menuName: "Colette",
				},
				{
					_id: "6033bb621fb7dc1fbbc24269",
					price: "$1,044.87",
					picture: "http://placehold.it/32x32",
					quantity: 3,
					menuName: "Lou",
				},
				{
					_id: "6033bb6280f08cfe4b023c98",
					price: "$3,867.64",
					picture: "http://placehold.it/32x32",
					quantity: 3,
					menuName: "Nadine",
				},
				{
					_id: "6033bb6265c8abfc582d172e",
					price: "$2,201.33",
					picture: "http://placehold.it/32x32",
					quantity: 10,
					menuName: "Katrina",
				},
			]);
		}, 3000);
	});

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" color={colors.secondaryColor} />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<View
					style={{
						backgroundColor: "white",
						height: 225,
						borderRadius: 5,
						padding: 5,
					}}
				>
					<Text>Container Item</Text>
				</View>
				<View
					style={{
						backgroundColor: "white",
						height: 75,
						borderRadius: 5,
						padding: 5,
						marginVertical: 8,
					}}
				>
					<Text>Container Item</Text>
				</View>
				<View style={{ paddingVertical: 8 }}>
					<TouchableOpacity
						style={{
							backgroundColor: colors.secondaryColor,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							paddingVertical: 14,
							borderRadius: 5,
						}}
					>
						<Text style={{ color: "white", fontWeight: "bold" }}>
							Checkout
						</Text>
					</TouchableOpacity>
				</View>
				{/* <FlatList
					ListEmptyComponent={() => (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Ionicons name="file-tray-outline" size={45} />
							<Text style={{ fontSize: 24 }}>No Data</Text>
						</View>
					)}
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item, index }) => (
						<HistoryItem item={item} key={index} />
					)}
				/> */}
			</View>
		);
	}
};

export default Checkout;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		flex: 1,
	},
});
