import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

const HistoryItem = ({ item }) => {
	return (
		<View
			style={{
				height: 60,
				marginVertical: 8,
				borderRadius: 4,
				padding: 4,
				backgroundColor: "white",
				borderColor: colors.grayColor,
				borderWidth: 0.3,
				flex: 1,
				justifyContent: "center",
			}}
		>
			<View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					paddingVertical: 4,
					paddingHorizontal: 8,
					backgroundColor: colors.secondaryColor,
					borderTopLeftRadius: 4,
					borderBottomRightRadius: 4,
				}}
			>
				<Text
					style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
				>
					Order No. # 1123
				</Text>
			</View>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 8,
				}}
			>
				<Text style={{ fontWeight: "bold" }}>
					{new Date().toLocaleDateString()}
				</Text>
				<Text style={{ fontWeight: "bold" }}>Rp. 250.000,-</Text>
			</View>
		</View>
	);
};

export default HistoryItem;

const styles = StyleSheet.create({});
