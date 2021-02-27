import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import store from "./src/redux";

const App = () => {
	return (
		<>
			<SafeAreaProvider>
				<Provider store={store}>
					<NavigationContainer>
						<Router />
					</NavigationContainer>
				</Provider>
			</SafeAreaProvider>
		</>
	);
};

export default App;
