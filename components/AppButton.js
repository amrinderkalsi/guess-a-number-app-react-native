import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import DefaultStyle from '../constants/default-styles';

const AppButton = ({ style, onPress, children }) => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <ButtonComponent onPress={onPress}>
            <View style={{ ...styles.appButton, ...style }}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </ButtonComponent>
    );
}

const styles = StyleSheet.create({
    appButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        ...DefaultStyle.bodyText
    }
});

export default AppButton;