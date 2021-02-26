import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { Home, Detail, Transaction, Checkout } from "../screens";

import { BottomNavigator } from "../components";

// Bottom Tab Bar
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
	return (
		<Tabs.Navigator
			initialRouteName="Home"
			tabBar={(props) => <BottomNavigator {...props} />}
		>
			<Tabs.Screen name="Home" component={Home} key="Home" />
			<Tabs.Screen
				name="Transaction"
				component={Transaction}
				key="Transaction"
			/>
		</Tabs.Navigator>
	);
};

const index = () => {
	return (
		<Stack.Navigator initialRouteName="Checkout">
			<Stack.Screen
				name="ContainerApp"
				component={BottomTab}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Detail" component={Detail} />
			<Stack.Screen
				name="Checkout"
				component={Checkout}
				options={{ headerShown: true, title: "Checkout Page" }}
			/>
		</Stack.Navigator>
	);
};

export default index;
