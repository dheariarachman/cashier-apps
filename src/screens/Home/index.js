import React, { useState } from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	ScrollView,
	Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { FavoriteItem, MenuItem, BottomSheetModal } from "../../components";
import { colors } from "../../utils";

import { connect } from "react-redux";

import MenuSection from "./menu.home";
import FavoriteSection from "./favorite.home";

const Home = ({ navigation, carts }) => {
	const [visible, setVisible] = useState(true);

	const HEIGHT = Dimensions.get("screen").height;
	const WIDTH = Dimensions.get("screen").width;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.headerContainer}>
					<Text style={styles.textStyle}>Mini Matik Resto</Text>
					<TouchableOpacity
						style={styles.buttonIconHorizontal}
						onPress={() => navigation.navigate("Checkout")}
					>
						<View style={styles.badgesItem}>
							<Text style={{ color: "white", fontSize: 10 }}>
								{carts.selected.length}
							</Text>
						</View>
						<Ionicons name="basket-outline" size={26} />
					</TouchableOpacity>
				</View>

				{/* Menu Favorite */}
				<FavoriteSection />

				{/* Navigation Item */}
				<View style={styles.sectionNavigationMenu}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Ionicons name="list" size={18} />
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 22,
								marginLeft: 8,
							}}
						>
							Daftar Menu
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							borderColor: colors.grayColor,
							borderWidth: 1,
							paddingVertical: 4,
							paddingHorizontal: 12,
							borderRadius: 50,
						}}
					>
						<Ionicons name="filter" size={18} />
						<Text style={{ fontSize: 22, marginLeft: 8 }}>
							Filter
						</Text>
					</View>
				</View>

				{/* List Menu */}
				{/* <MenuSection /> */}
			</ScrollView>

			<BottomSheetModal
				displayModal={visible}
				closeModal={() => setVisible(false)}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: "#000000AA",
						justifyContent: "flex-end",
					}}
				>
					
					<Text>{HEIGHT}</Text>
					<Text>{WIDTH}</Text>
				</View>
			</BottomSheetModal>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => {
	const { carts } = state;
	return { carts };
};

const addItemToCart = (item) => {
	console.log(item);
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 18,
	},
	container: {
		paddingVertical: 12,
	},
	buttonIconHorizontal: {
		flexDirection: "row",
		alignItems: "center",
	},
	textStyle: {
		fontWeight: "bold",
		fontSize: 26,
	},
	badgesItem: {
		position: "absolute",
		width: 15,
		height: 15,
		borderRadius: 100,
		backgroundColor: "red",
		top: 0,
		right: 0,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 100,
	},
	favoriteContainer: {
		marginLeft: 18,
		marginTop: 32,
	},
	sectionNavigationMenu: {
		marginVertical: 16,
		marginHorizontal: 18,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
