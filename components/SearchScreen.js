// components/SearchScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import axios from 'axios';

const API_KEY = 'd6def4924ad5f9a9b59f3ae895b234cb';

const SearchScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lastSearches, setLastSearches] = useState([]);

  const handleCitySearch = async (city) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          q: city,
          units: 'metric',
          lang: 'fr',
          appid: API_KEY,
        },
      });

      setWeatherData(response.data);
      setLastSearches((prevSearches) => [city, ...prevSearches.slice(0, 4)]); // Garde les 5 dernières recherches
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setErrorMsg('Erreur lors de la récupération des données météo.');
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleCitySearch} />
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
      {weatherData ? (
        <CurrentWeather data={weatherData} />
      ) : (
        <Text style={styles.loadingText}></Text>
      )}
      {lastSearches.length > 0 && (
        <View style={styles.lastSearchesContainer}>
          <Text style={styles.lastSearchesTitle}>Dernières recherches :</Text>
          {lastSearches.map((search, index) => (
            <Text key={index} style={styles.lastSearchItem}>
              {search}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5fcff',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
  },
  lastSearchesContainer: {
    marginTop: 20,
  },
  lastSearchesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lastSearchItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default SearchScreen;
