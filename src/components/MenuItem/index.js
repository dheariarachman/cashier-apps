import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { colors } from "../../utils";

import { Ionicons } from "@expo/vector-icons";

const MenuItem = ({ item }) => {
	return (
		<TouchableOpacity style={{ flex: 1 }}>
			<ImageBackground
				source={{ uri: item.imageUri }}
				style={{
					marginHorizontal: 8,
					marginVertical: 4,
					height: 150,
					borderColor: colors.grayColor,
				}}
				borderRadius={8}
			>
				<View
					style={{
						backgroundColor: "white",
						position: "absolute",
						padding: 2,
						borderTopLeftRadius: 8,
						borderBottomEndRadius: 8,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "bold",
							marginHorizontal: 8,
						}}
					>
						{item.title}
					</Text>
				</View>
				<View
					style={{
						position: "absolute",
						bottom: 0,
						flexDirection: "row",
					}}
				>
					<View style={styles.buttonStyle}>
						<TouchableOpacity
							style={{ flexDirection: "row", flex: 1 }}
						>
							<Ionicons name="cart" size={14} color="white" />
							<Text
								style={{
									color: "white",
									fontWeight: "bold",
									fontSize: 14,
									marginLeft: 4,
								}}
							>
								Order
							</Text>
						</TouchableOpacity>
						<Text style={{ color: "white" }}>Rp. 12000</Text>
					</View>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default MenuItem;

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: colors.secondaryColor,
		paddingVertical: 8,
		paddingHorizontal: 8,
		alignItems: "center",
		borderBottomEndRadius: 8,
		borderBottomStartRadius: 8,
	},
});
