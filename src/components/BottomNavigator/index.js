import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";

import { colors } from "../../utils/";

const BottomNavigator = ({ state, navigation, descriptors }) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<SafeAreaView style={styles.bottomBarContainer}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={styles.bottomBarItem(isFocused)}
						key={label}
					>
						<Text style={styles.bottomBartext(isFocused)}>
							{label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</SafeAreaView>
	);
};

export default BottomNavigator;

const styles = StyleSheet.create({
	bottomBarContainer: {
		flexDirection: "row",
		marginBottom: 16,
		marginHorizontal: 18,
		paddingVertical: 8,
		borderRadius: 24,
		borderColor: colors.primaryColor,
		backgroundColor: colors.primaryColor,
		borderWidth: 1,
	},
	bottomBarItem: (isFocused) => ({
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: isFocused ? "white" : colors.primaryColor,
		paddingVertical: 8,
		marginHorizontal: 12,
		borderRadius: 18,
	}),
	bottomBartext: (isFocused) => ({
		color: isFocused ? colors.primaryColor : "white",
		fontWeight: isFocused ? "bold" : "normal",
	}),
});
