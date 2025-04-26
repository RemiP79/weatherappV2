/*import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import ForecastWeather from './ForecastWeather';

const API_KEY = 'd6def4924ad5f9a9b59f3ae895b234cb';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      // Appel à l'API pour obtenir la géolocalisation de la ville
      const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        throw new Error('Ville non trouvée');
      }

      const { lat, lon } = geoData[0];

      // Appel à l'API pour obtenir les prévisions météo
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const weatherData = await weatherResponse.json();

      setWeatherData(weatherData);
      setSearchHistory([...searchHistory, city]);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && <ForecastWeather data={weatherData} />}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Historique des recherches :</Text>
        <FlatList
          data={searchHistory}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  historyContainer: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyItem: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default WeatherApp;*/


import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState(''); // État pour la saisie de la ville

  const handleSearch = () => {
    if (city.trim()) { // Vérifie si la ville n'est pas vide
      onSearch(city); // Appelle la fonction passée en props
      setCity(''); // Réinitialise le champ après recherche
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez une ville"
        value={city}
        onChangeText={setCity} // Met à jour l'état lors de la saisie
      />
      <Button title="Rechercher" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default SearchBar;
