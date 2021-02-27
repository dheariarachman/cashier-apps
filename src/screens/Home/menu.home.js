import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MenuItem } from "../../components";

const MenuSection = () => {
	return (
		<View style={{ paddingHorizontal: 18 }}>
			<FlatList
				numColumns={2}
				data={itemsAll}
				keyExtractor={(item) => item.id}
				renderItem={({ item, index }) => (
					<MenuItem
						item={item}
						key={index}
						onPress={() => console.log(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default MenuSection;

const styles = StyleSheet.create({});
