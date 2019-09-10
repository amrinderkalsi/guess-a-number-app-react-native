import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);

  if (!dataLoading) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoading(true)} 
        onError={(error) => console.log(error)} />
    );
  };

  const setNumber = (number) => {
    setSelectedNumber(number);
  };

  const gameOverHandler = (noOfRounds) => {
    setGuessRound(noOfRounds);
  };

  const startNewGameHandler = () => {
    setGuessRound(0);
    setSelectedNumber(null);
  };

  let content = <StartGameScreen setSelectedNumber={setNumber} />
  

  if (selectedNumber && guessRound <= 0) {
    content = <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler} />;
  } else if (guessRound > 0) {
    content = <GameOverScreen noOfRounds={guessRound} onRestart={startNewGameHandler} number={selectedNumber} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;


