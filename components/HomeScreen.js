import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission de localisation refusée');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchWeather(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchWeather = async (lat, lon) => {
    const apiKey = 'd6def4924ad5f9a9b59f3ae895b234cb';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <View>
      {weather ? (
        <Text>{`Température : ${weather.main.temp}°C, Humidité : ${weather.main.humidity}%`}</Text>
      ) : (
        <Text>Chargement...</Text>
      )}
    </View>
  );
}
