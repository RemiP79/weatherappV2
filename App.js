import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, View } from 'react-native';
import CurrentWeatherScreen from './components/CurrentWeatherScreen';
import SearchScreen from './components/SearchScreen';
import RainForecastScreen from './components/RainForecastScreen';

const Tab = createBottomTabNavigator();

// 👉 Créer un wrapper pour mettre l'image en fond sur tous les écrans
const ScreenWithBackground = ({ children }) => (
  <ImageBackground
    source={require('./assets/background.jpg')}
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.container}>
      {children}
    </View>
  </ImageBackground>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chercher ma ville') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Prévisions de pluie') {
              iconName = focused ? 'rainy' : 'rainy-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF8C00', // Couleur orange foncé pour les éléments actifs
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'gray', // Couleur de fond de la barre de navigation
          },
          
          headerShown: true,
        })}
      >
        <Tab.Screen name="Accueil">
          {() => (
            <ScreenWithBackground>
              <CurrentWeatherScreen />
            </ScreenWithBackground>
          )}
        </Tab.Screen>
        <Tab.Screen name="Chercher ma ville">
          {() => (
            <ScreenWithBackground>
              <SearchScreen />
            </ScreenWithBackground>
          )}
        </Tab.Screen>
        <Tab.Screen name="Prévisions de pluie">
          {() => (
            <ScreenWithBackground>
              <RainForecastScreen />
            </ScreenWithBackground>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Important pour que l'image reste visible
  },
});

export default App;





/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // ✅ Utilisation des icônes
import { ImageBackground, StyleSheet } from 'react-native';
import CurrentWeatherScreen from './components/CurrentWeatherScreen';
import SearchScreen from './components/SearchScreen';
import RainForecastScreen from './components/RainForecastScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Choix des icônes selon les écrans
            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'chercher ma ville') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Prévisions de pluie') {
              iconName = focused ? 'rainy' : 'rainy-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e90ff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        
        <Tab.Screen name="Accueil" component={CurrentWeatherScreen} />
        <Tab.Screen name="chercher ma ville" component={SearchScreen} />
        <Tab.Screen name="Prévisions de pluie" component={RainForecastScreen} />
        
      </Tab.Navigator>
      
      
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
*/


/*import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen'; 
import CurrentWeatherScreen from './components/CurrentWeatherScreen'; 
import SearchBar from './components/SearchBar';
import SearchScreen from './components/SearchScreen';
import RainForecastScreen from './components/RainForecastScreen';
const Tab = createBottomTabNavigator();

const App = () => {


  return (    
      
    <NavigationContainer>    
      <Tab.Navigator>        
        <Tab.Screen
          name="Accueil"
          component={CurrentWeatherScreen}
        />                 
        <Tab.Screen name="chercher ma ville" component={SearchScreen} />
        <Tab.Screen name="Prévisions de pluie" component={RainForecastScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;*/







/*import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import SearchBar from './components/SearchBar';
import ScreenHome from './components/ScreenHome';

/*const API_KEY = 'd6def4924ad5f9a9b59f3ae895b234cb';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import RainForecastScreen from './components/RainForecastScreen';
import SearchScreen from './components/SearchScreen';
import HelloWorld from './components/HelloWorld';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HelloWorld} />        
      </Tab.Navigator>
    </NavigationContainer>
  );
}







/*export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  // Fonction pour la recherche par ville
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

      // Organiser les prévisions météo
      const dailyForecasts = [];
      let currentDate = '';
      response.data.list.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
        if (forecastDate !== currentDate) {
          currentDate = forecastDate;
          dailyForecasts.push(forecast);
        }
      });

      // Filtrer pour ne pas inclure les prévisions d'aujourd'hui
      const today = new Date().toLocaleDateString();
      const filteredForecasts = dailyForecasts.filter((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
        return forecastDate !== today;
      });

      setForecastData(filteredForecasts);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setErrorMsg('Erreur lors de la récupération des données météo.');
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission pour accéder à la localisation refusée');
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            lat: coords.latitude,
            lon: coords.longitude,
            units: 'metric',
            lang: 'fr',
            appid: API_KEY,
          },
        });

        setWeatherData(response.data);

        // Organiser les prévisions météo
        const dailyForecasts = [];
        let currentDate = '';
        response.data.list.forEach((forecast) => {
          const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
          if (forecastDate !== currentDate) {
            currentDate = forecastDate;
            dailyForecasts.push(forecast);
          }
        });

        // Filtrer pour ne pas inclure les prévisions d'aujourd'hui
        const today = new Date().toLocaleDateString();
        const filteredForecasts = dailyForecasts.filter((forecast) => {
          const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
          return forecastDate !== today;
        });

        setForecastData(filteredForecasts);
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo :', error);
        setErrorMsg('Erreur lors de la récupération des données météo.');
      }
    };

    fetchWeather();
  }, []);

  return (
<ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >   
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Météo" component={ScreenHome} />           
      </Tab.Navigator>
    </NavigationContainer>

</ImageBackground>
      



   
    


  )
/*
  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >      
      <View style={styles.container}>
        <SearchBar onSearch={(city) => handleCitySearch(city)} />
        <View style={styles.CurrentWeatherContainer}>
          <CurrentWeather data={weatherData} />
        </View>
        <View style={styles.ForecastWeatherContainer}>
          <ForecastWeather data={forecastData} />
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}*/

/*const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'flex-start',
  },
  background: {
    flex: 1,
  },
  CurrentWeatherContainer: {
    paddingTop: 80,
    alignItems: 'center',
  },
  ForecastWeatherContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
});*/
