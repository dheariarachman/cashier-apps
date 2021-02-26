import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
	return (
		<SafeAreaView>
			<Text style={styles.textContainer}>Detail</Text>
		</SafeAreaView>
	);
};

export default Detail;

const styles = StyleSheet.create({
	textContainer: {
		fontWeight: "normal",
	},
});
