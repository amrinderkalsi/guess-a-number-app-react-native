import React from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import DefaultStyle from '../constants/default-styles';
import MainButton from '../components/MainButton';

class StartScreenScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enteredValue: '',
            confirmed: '',
            selectedNumber: ''
        }
    }

    handleTextChange = (value) => {
        this.setState({ enteredValue: value.replace(/[^0-9]/g, '') });
    }

    resetInputHandler = () => {
        this.setState({ enteredValue : '' })
    }

    confirmInputHandler = () => {
        const chosenNumber = parseInt(this.state.enteredValue);
        
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be in a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: this.resetInputHandler}] 
            )
            return;
        }
        this.setState({ 
            confirmed: true,
            selectedNumber: chosenNumber,
            enteredValue: ''
        });
        Keyboard.dismiss();
    }

    render() {
        let confirmedOutput;

        if(this.state.confirmed){
            confirmedOutput = (
                <Card style={styles.summaryContainer}>
                    <Text style={DefaultStyle.bodyText}>You have selected</Text>
                    <NumberContainer>
                        {this.state.selectedNumber}
                    </NumberContainer>
                    <MainButton onPress= {() => this.props.setSelectedNumber(this.state.selectedNumber)}>
                        START GAME
                    </MainButton>
                    {/* <Button title='START GAME' onPress= {() => this.props.setSelectedNumber(this.state.selectedNumber)}/> */}
                </Card>
            );
        }


        return (
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <View style={styles.screen}>
                    <Text style={styles.title}>The Game Screen</Text>
                    <Card style={styles.inputContainer}>
                        <Text style={DefaultStyle.bodyText}>Select a Number</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            maxLength={2}
                            onChangeText={(value) => this.handleTextChange(value)}
                            value={this.state.enteredValue}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title='Reset' onPress={this.resetInputHandler} color={Colors.accent} />
                            </View>
                            <View style={styles.button}>
                                <Button title='Confirm' onPress={this.confirmInputHandler} color={Colors.primary} />
                            </View>
                        </View>
                    </Card>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15
    },
    button: {
        width: '40%'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartScreenScreen;