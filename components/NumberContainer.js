import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    numberContainer: {
        marginVertical: 10,
        borderWidth: 2,
        borderColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10        
    },
    number: {
        fontSize: 22,
        color: Colors.accent
    }
});

export default NumberContainer;