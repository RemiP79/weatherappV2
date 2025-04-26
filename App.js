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
