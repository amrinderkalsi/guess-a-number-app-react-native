import React, { useState, useRef, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Alert,
    ScrollView,
    Dimensions
} from "react-native";
import { Ionicons } from '@expo/vector-icons'

import DefaultStyles from '../constants/default-styles';
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

const GameScreen = ({ userChoice, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const [avaiableDeviceWidth, setAvaiableDeviceWidth] = useState(Dimensions.get('window').width);
    const [avaiableDeviceHeight, setAvaiableDeviceHeight] = useState(Dimensions.get('window').height);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandler = direction => {
        if (
            (direction === "lower" && currentGuess < userChoice) ||
            (direction === "greater" && currentGuess > userChoice)
        ) {
            Alert.alert(`Dont't lie!`, "you know that this is wrong....", [
                { text: "Sorry!", style: "cancel" }
            ]);
            return;
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextGuess = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextGuess);
        // setRounds(currRound => currRound + 1);
        setPastGuesses(curPastGuessess => [
            nextGuess.toString(),
            ...curPastGuessess
        ]);
    };

    useEffect(() => {
        const updateLayout = () => {
            setAvaiableDeviceHeight(Dimensions.get('window').height);
            setAvaiableDeviceWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    if (avaiableDeviceHeight < 500) {
        return (
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>Opponent's Guess</Text>
                <View style={styles.controls}>
                    <MainButton onPress={() => nextGuessHandler("lower")}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </MainButton>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton onPress={() => nextGuessHandler("greater")}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </MainButton>
                </View>
                <View style={styles.listContainer}>
                    <ScrollView contentContainerStyle={styles.list}>
                        {pastGuesses.map((guess, index) =>
                            renderListItem(guess, pastGuesses.length - index)
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler("lower")}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler("greater")}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) =>
                        renderListItem(guess, pastGuesses.length - index)
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

const renderListItem = (value, noOfRounds) => {
    return (
        <View key={value} style={styles.listItem}>
            <BodyText>#{noOfRounds}</BodyText>
            <BodyText>{value}</BodyText>
        </View>
    );
}

const generateRandomBetween = (max, min, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumber(max, min, exclude);
    } else {
        return randomNumber;
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        // marginTop: 20,
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: "90%"
    },
    listContainer: {
        flex: 1,
        width: Dimensions.get('window') > 350 ? '60%' : '80%'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
    horizontalButtons: {
        margin: 20
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default GameScreen;
