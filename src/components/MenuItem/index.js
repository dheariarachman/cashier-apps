import React, { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { colors } from "../../utils";

import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

import { addItem } from "../../redux/actions/cart.action";

const MenuItem = ({ item, addItem, onPress }) => {
	return (
		<TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
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

const mapStateToProps = (state) => {
	const { carts } = state;
	return { carts };
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

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
