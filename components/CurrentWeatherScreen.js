// components/CurrentWeatherScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import CurrentWeather from "./CurrentWeather"; // Assurez-vous que le chemin est correct
import BurgerMenu from './BurgerMenu'; // Ajout du BurgerMenu
import * as Location from 'expo-location';
import axios from 'axios';

// Dimensions de l'écran
const { width, height } = Dimensions.get('window');

const API_KEY = "d6def4924ad5f9a9b59f3ae895b234cb";

const CurrentWeatherScreen = ({ route }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permission pour accéder à la localisation refusée");
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              lat: coords.latitude,
              lon: coords.longitude,
              units: "metric",
              lang: "fr",
              appid: API_KEY,
            },
          }
        );
        console.log("Mise à jour des données météo");
        setWeatherData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo :",
          error
        );
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {/* Menu burger fixe en haut */}
      <View style={styles.burgerWrapper}>
        <BurgerMenu />
      </View>

      {/* Contenu scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {weatherData ? (
          <CurrentWeather data={weatherData} />
        ) : (
          <Text style={styles.loadingText}>Chargement des données météo...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
  },
  burgerWrapper: {
    paddingTop: height * 0.06, // 6% de la hauteur
    paddingHorizontal: width * 0.05, // 5% de la largeur
    backgroundColor: '#f5fcff',
    zIndex: 1,
  },
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.05,
    alignItems: "center", // Centrer le contenu
  },
  loadingText: {
    fontSize: width * 0.045,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
    marginTop: height * 0.02,
  },
});

export default CurrentWeatherScreen;




// components/CurrentWeatherScreen.js
/*import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import CurrentWeather from "./CurrentWeather"; // Assurez-vous que le chemin est correct
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "d6def4924ad5f9a9b59f3ae895b234cb";

const CurrentWeatherScreen = ({ route }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permission pour accéder à la localisation refusée");
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});
        //console.log(coords);
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              lat: coords.latitude,
              lon: coords.longitude,
              units: "metric",
              lang: "fr",
              appid: API_KEY,
            },
          }
        );
        console.log("Mise à jour des données météo");
        //console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo :",
          error
        );
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <CurrentWeather data={weatherData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});

export default CurrentWeatherScreen;*/
