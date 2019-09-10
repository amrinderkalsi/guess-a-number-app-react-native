import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({children, style}) => {
    return (
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;