import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { HistoryItem } from "../../components";
import { colors } from "../../utils";

import { connect } from "react-redux";

const Checkout = ({ carts }) => {
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" color={colors.secondaryColor} />
			</View>
		);
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View
					style={{
						flex: 4,
					}}
				>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={carts.selected}
						keyExtractor={(item) => item.id}
						key={({ item, index }) => item.id}
						renderItem={({ item, index }) => (
							<HistoryItem item={item} key={index} />
						)}
					/>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						paddingHorizontal: 16,
						backgroundColor: "white",
						borderTopRightRadius: 8,
						borderTopLeftRadius: 8,
						elevation: 16,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 8,
						}}
					>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Total Harga
						</Text>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Rp. {carts.totalPrice}
						</Text>
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: colors.secondaryColor,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							paddingVertical: 14,
							borderRadius: 5,
						}}
					>
						<Text style={{ color: "white", fontWeight: "bold" }}>
							Checkout
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
};

const mapStateToProps = (state) => {
	const { carts } = state;
	return { carts };
};

export default connect(mapStateToProps)(Checkout);

const styles = StyleSheet.create({});
