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
import { SafeAreaView } from "react-native-safe-area-context";
import { HistoryItem } from "../../components";
import { colors } from "../../utils";

const Checkout = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	});

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.textStyle}>Mini Matik Resto</Text>
				<TouchableOpacity
					style={styles.buttonIconHorizontal}
					onPress={() => navigation.navigate("Checkout")}
				>
					<View style={styles.badgesItem}>
						<Text style={{ color: "white", fontSize: 10 }}>1</Text>
					</View>
					<Ionicons name="basket-outline" size={26} />
				</TouchableOpacity>
			</View>

			{isLoading ? (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ActivityIndicator
						size="large"
						color={colors.secondaryColor}
					/>
				</View>
			) : (
				<View style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
					<FlatList
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={({ item, index }) => (
							<HistoryItem item={item} key={index} />
						)}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Checkout;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		flex: 1,
	},
	headerContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 18,
	},
	textStyle: {
		fontWeight: "bold",
		fontSize: 26,
	},
	buttonIconHorizontal: {
		flexDirection: "row",
		alignItems: "center",
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
});
