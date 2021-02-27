import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils";

const HistoryItem = ({ item }) => {
	const state = {
		count: 0,
	};

	const incrementItem = () => {};

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					height: 64,
					width: 64,
					borderWidth: 0.5,
					borderColor: colors.grayColor,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 8,
				}}
			>
				<Text>Image</Text>
			</View>
			<View
				style={{
					flex: 3,
					marginVertical: 8,
					marginHorizontal: 16,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
					}}
				>
					<Text style={{ fontWeight: "bold", fontSize: 14 }}>
						{item.title}
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<TouchableOpacity style={styles.circle}>
						<Ionicons name="remove-outline" color="white" />
					</TouchableOpacity>
					<View style={{ marginHorizontal: 8 }}>
						<Text style={{ fontSize: 22 }}>{state.count}</Text>
					</View>
					<TouchableOpacity style={styles.circle}>
						<Ionicons name="add" color="white" />
					</TouchableOpacity>
				</View>
			</View>

			<View
				style={{
					flex: 2,
					alignItems: "flex-end",
				}}
			>
				<Text style={{ fontSize: 22 }}>{item.price}</Text>
			</View>
		</SafeAreaView>
	);
};

export default HistoryItem;

const styles = StyleSheet.create({
	container: {
		height: 80,
		backgroundColor: "white",
		marginHorizontal: 16,
		marginTop: 10,
		marginBottom: 8,
		borderRadius: 8,
		elevation: 4,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 8,
	},
	circle: {
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		backgroundColor: colors.secondaryColor,
	},
});
