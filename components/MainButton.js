import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const MainButton = ({style, children, onPress}) => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={{ ...styles.buttonContainer, ...style }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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