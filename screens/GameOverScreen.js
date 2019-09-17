import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const GameOverScreen = ({ noOfRounds, onRestart, number }) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayoutWidthHeight = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
      setAvailableDeviceWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayoutWidthHeight);

    return () => {
      Dimensions.removeEventListener("change", updateLayoutWidthHeight);
    };
  });

  if (availableDeviceHeight < 500) {
    return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>Game Over!</TitleText>
          <View
            style={{
              ...styles.imageContainer,
              width: availableDeviceWidth * 0.5,
              height: availableDeviceWidth * 0.5,
              borderRadius: (availableDeviceWidth * 0.5) / 2,
              marginVertical: availableDeviceHeight / 30
            }}
          >
            <Image
              fadeDuration={500}
              style={styles.image}
              // source={require('../assets/success.png')}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg"
              }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              ...styles.resultContainer,
              marginVertical: availableDeviceHeight / 60
            }}
          >
            <BodyText
              style={{
                ...styles.resultText,
                fontSize: availableDeviceHeight < 400 ? 16 : 20
              }}
            >
              The game needed
              <Text style={styles.textHighlight}> {noOfRounds} </Text>
              rounds to guess the number
              <Text style={styles.textHighlight}> {number} </Text>
            </BodyText>
          </View>

          <MainButton onPress={onRestart}>NEW GAME</MainButton>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game Over!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            width: availableDeviceWidth * 0.7,
            height: availableDeviceWidth * 0.7,
            borderRadius: (availableDeviceWidth * 0.7) / 2,
            marginVertical: availableDeviceHeight / 30
          }}
        >
          <Image
            fadeDuration={500}
            style={styles.image}
            // source={require('../assets/success.png')}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg"
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            marginVertical: availableDeviceHeight / 60
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              fontSize: availableDeviceHeight < 400 ? 16 : 20
            }}
          >
            The game needed
            <Text style={styles.textHighlight}> {noOfRounds} </Text>
            rounds to guess the number
            <Text style={styles.textHighlight}> {number} </Text>
          </BodyText>
        </View>

        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  resultContainer: {
    marginHorizontal: 30
  },
  resultText: {
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  textHighlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
