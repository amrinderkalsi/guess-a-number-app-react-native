import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../constants/Colors';

const MainButton = ({ style, children, onPress }) => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android') {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonWrapper}>
            <ButtonComponent activeOpacity={0.6} onPress={onPress}>
                <View style={{ ...styles.buttonContainer, ...style }}>
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
                </View>
            </ButtonComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    buttonContainer: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;