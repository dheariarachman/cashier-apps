import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
