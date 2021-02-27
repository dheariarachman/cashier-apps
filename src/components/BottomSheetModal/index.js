import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Modal,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";

const BottomSheetModal = ({ displayModal, closeModal, children }) => {
	// const [visible, setVisible] = useState(false);

	const renderOutsideTouchable = (onTouch) => {
		const view = <View style={{ flex, width: "100%" }} />;
		if (!onTouch) return view;

		return (
			<TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1 }}>
				{view}
			</TouchableWithoutFeedback>
		);
	};

	return (
		<Modal
			animationType={"slide"}
			transparent={true}
			visible={displayModal}
			onRequestClose={closeModal}
		>
			{children}
		</Modal>
	);
};

export default BottomSheetModal;

const styles = StyleSheet.create({});
