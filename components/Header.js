import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import DefaultStyle from '../constants/default-styles';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={DefaultStyle.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;