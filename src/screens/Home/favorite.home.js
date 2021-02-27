import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteItem } from "../../components";

const FavoriteSection = () => {
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

	return (
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
	);
};

export default FavoriteSection;

const styles = StyleSheet.create({
	favoriteContainer: {
		marginLeft: 18,
		marginTop: 32,
	},
});
