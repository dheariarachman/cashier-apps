import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colors } from "../../utils";
import { Ionicons } from "@expo/vector-icons";

const FavoriteItem = ({ imageUri, titleMenu, priceMenu = 0, onPress }) => {
	return (
		<View style={styles.favoriteItemContainer}>
			<Image source={imageUri} style={styles.imageContainer} />
			<View style={{ marginHorizontal: 8 }}>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 18,
						marginVertical: 8,
					}}
				>
					{titleMenu}
				</Text>
				<Text style={{ fontWeight: "600", marginBottom: 8 }}>
					Rp. {priceMenu}
				</Text>
			</View>
			<TouchableOpacity
				onPress={onPress}
				style={{
					position: "absolute",
					width: "100%",
					backgroundColor: colors.secondaryColor,
					paddingVertical: 6,
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
					bottom: 0,
					borderBottomLeftRadius: 4,
					borderBottomRightRadius: 4,
				}}
			>
				<Ionicons name="cart" size={15} color="white" />
				<Text style={{ color: "white", marginLeft: 8 }}>Order</Text>
			</TouchableOpacity>
		</View>
	);
};

export default FavoriteItem;

const styles = StyleSheet.create({
	imageContainer: {
		resizeMode: "cover",
		width: "100%",
		height: 100,
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
	},
	favoriteItemContainer: {
		height: 200,
		width: 150,
		borderWidth: 0.5,
		borderColor: colors.grayColor,
		resizeMode: "cover",
		borderRadius: 4,
		marginRight: 18,
	},
});
