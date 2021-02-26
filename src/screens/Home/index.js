import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	ScrollView,
	FlatList,
	ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { FavoriteItem, MenuItem } from "../../components";
import { colors } from "../../utils";

const Home = ({ navigation }) => {
	const itemSelected = (item) => {
		alert(item.title);
	};

	const items = [
		{
			id: 0,
			title: "Sate Taichan",
			price: 12500,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 1,
			title: "Martabak",
			price: 22500,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 2,
			title: "Karaoket",
			price: 5000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 3,
			title: "Sop Buah",
			price: 15000,
			imageUri: "https://picsum.photos/100/100",
		},
		{
			id: 4,
			title: "Jus Mangga",
			price: 10000,
			imageUri: "https://picsum.photos/100/100",
		},
	];

	const itemsAll = [
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
	];

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
								1
							</Text>
						</View>
						<Ionicons name="basket-outline" size={26} />
					</TouchableOpacity>
				</View>

				{/* Menu Favorite */}
				<View style={styles.favoriteContainer}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 16,
						}}
					>
						<Ionicons name="heart" size={18} />
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 22,
								marginLeft: 8,
							}}
						>
							Menu Favorit
						</Text>
					</View>
					<FlatList
						style={{ marginLeft: 0 }}
						data={items}
						renderItem={({ item, index }) => (
							<FavoriteItem
								titleMenu={item.title}
								imageUri={{ uri: item.imageUri }}
								priceMenu={item.price}
								key={index}
							/>
						)}
						keyExtractor={(item) => item.id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>

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
				<View style={{ paddingHorizontal: 18 }}>
					<FlatList
						numColumns={2}
						data={itemsAll}
						keyExtractor={(item) => item.id}
						renderItem={({ item, index }) => (
							<MenuItem item={item} key={index} />
						)}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

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
