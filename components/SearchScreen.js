import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import axios from 'axios';
import BurgerMenu from './BurgerMenu';

const { width, height } = Dimensions.get('window');

const API_KEY = 'd6def4924ad5f9a9b59f3ae895b234cb';

const SearchScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lastSearches, setLastSearches] = useState([]);

  // Fonction de recherche de la ville
  const handleCitySearch = async (city) => {
    setWeatherData(null);  // Réinitialiser les données météo avant une nouvelle recherche
    setErrorMsg(null); // Réinitialiser les erreurs

    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          q: city,
          units: 'metric',
          lang: 'fr',
          appid: API_KEY,
        },
      });

      setWeatherData(response.data); // Mettre à jour les données météo
      // Ajouter la ville à l'historique si elle n'y est pas déjà
      setLastSearches((prevSearches) => {
        if (!prevSearches.includes(city)) {
          return [city, ...prevSearches.slice(0, 4)]; // Ajouter la ville en haut de l'historique et limiter à 5
        }
        return prevSearches;
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setErrorMsg('Erreur lors de la récupération des données météo.');
    }
  };

  const handleSearchFromHistory = (city) => {
    console.log(`Recherche de la ville : ${city}`);
    handleCitySearch(city); // Relancer la recherche pour la ville sélectionnée dans l'historique
  };

  return (
    <View style={styles.container}>
      {/* Burger menu fixe en haut */}
      <View style={styles.burgerWrapper}>
        <BurgerMenu />
      </View>

      {/* Contenu scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SearchBar onSearch={handleCitySearch} />

        {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}

        {weatherData ? (
          <CurrentWeather data={weatherData} />
        ) : (
          <Text style={styles.loadingText}>Attente des données météo...</Text>
        )}

        {lastSearches.length > 0 && (
          <View style={styles.lastSearchesContainer}>
            <Text style={styles.lastSearchesTitle}>Dernières recherches :</Text>
            {lastSearches.map((search, index) => (
              <TouchableOpacity key={index} onPress={() => handleSearchFromHistory(search)}>
                <Text style={styles.lastSearchItem}>{search}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  burgerWrapper: {
    paddingTop: height * 0.06, // 6% de la hauteur
    paddingHorizontal: width * 0.05, // 5% de la largeur
    backgroundColor: '#fff',
    zIndex: 1,
  },
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.05,
  },
  errorText: {
    color: 'red',
    marginVertical: height * 0.01,
    fontSize: width * 0.04,
  },
  loadingText: {
    marginVertical: height * 0.02,
    fontStyle: 'italic',
    fontSize: width * 0.04,
  },
  lastSearchesContainer: {
    marginTop: height * 0.015,
  },
  lastSearchesTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  lastSearchItem: {
    fontSize: width * 0.04,
    paddingVertical: height * 0.005,
    color: '#007BFF', // Ajout d'une couleur pour rendre le texte cliquable
  },
});

export default SearchScreen;






/*import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import axios from 'axios';
import BurgerMenu from './BurgerMenu';

const { width, height } = Dimensions.get('window');

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
      setLastSearches((prevSearches) => [city, ...prevSearches.slice(0, 4)]);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setErrorMsg('Erreur lors de la récupération des données météo.');
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.burgerWrapper}>
        <BurgerMenu />
      </View>

      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              <TouchableOpacity key={index} onPress={() => handleCitySearch(search)}>
                <Text style={styles.lastSearchItem}>{search}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  burgerWrapper: {
    paddingTop: height * 0.06, // 6% de la hauteur
    paddingHorizontal: width * 0.05, // 5% de la largeur
    backgroundColor: '#fff',
    zIndex: 1,
  },
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.05,
  },
  errorText: {
    color: 'red',
    marginVertical: height * 0.01,
    fontSize: width * 0.04,
  },
  loadingText: {
    marginVertical: height * 0.02,
    fontStyle: 'italic',
    fontSize: width * 0.04,
  },
  lastSearchesContainer: {
    marginTop: height * 0.015,
  },
  lastSearchesTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  lastSearchItem: {
    fontSize: width * 0.04,
    paddingVertical: height * 0.005,
    color: '#007BFF', // Ajout d'une couleur pour rendre le texte cliquable
  },
});

export default SearchScreen;
*/

/*import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import axios from 'axios';
import BurgerMenu from './BurgerMenu';


const { width, height } = Dimensions.get('window');

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
      setLastSearches((prevSearches) => [city, ...prevSearches.slice(0, 4)]);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setErrorMsg('Erreur lors de la récupération des données météo.');
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.burgerWrapper}>
        <BurgerMenu />
      </View>

      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    burgerWrapper: {
      paddingTop: height * 0.06, // 6% de la hauteur
      paddingHorizontal: width * 0.05, // 5% de la largeur
      backgroundColor: '#fff',
      zIndex: 1,
    },
    scrollContainer: {
      paddingHorizontal: width * 0.05,
      paddingTop: height * 0.02,
      paddingBottom: height * 0.05,
    },
    errorText: {
      color: 'red',
      marginVertical: height * 0.01,
      fontSize: width * 0.04,
    },
    loadingText: {
      marginVertical: height * 0.02,
      fontStyle: 'italic',
      fontSize: width * 0.04,
    },
    lastSearchesContainer: {
      marginTop: height * 0.015,
    },
    lastSearchesTitle: {
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
    lastSearchItem: {
      fontSize: width * 0.04,
      paddingVertical: height * 0.005,
    },
  });

export default SearchScreen;*/
