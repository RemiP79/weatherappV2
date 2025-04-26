  import React, { useEffect, useState } from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import ShowIcon from './ShowIcon'; // Assurez-vous du chemin vers ShowIcon

  const CurrentWeather = ({ data }) => {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
      if (data && data.list && data.list.length > 0) {
        const firstWeather = data.list[0]; // Récupère la première météo
        setCurrentWeather({
          city: data.city.name, // Nom de la ville
          day: new Date(firstWeather.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long' }), // Jour de la semaine
          temperature: firstWeather.main.temp.toFixed(1), // Température
          description: firstWeather.weather[0].description, // Description météo
          icon: firstWeather.weather[0].icon, // Icône météo
          
        });
        console.log('icone :', firstWeather.weather[0].icon); // Affiche l'icône dans la console
      }
    }, [data]);

    if (!currentWeather) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Chargement...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>        
        <Text style={styles.cityText}>{currentWeather.city}</Text>        
        <Text style={styles.dayText}>{currentWeather.day}</Text>        
        <ShowIcon icon={currentWeather.icon} resolution="4x" size={100} />       
        <Text style={styles.temperatureText}>{`${currentWeather.temperature}°C`}</Text>        
        <Text style={styles.descriptionText}>{currentWeather.description}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: 10,
      marginVertical: 20,
      maxHeight: 'auto',
    },
    cityText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    dayText: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 5,
      minWidth: 100,
      textAlign: 'center',
    },
    temperatureText: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#fff',
    },
    descriptionText: {
      fontSize: 18,
      color: '#fff',
    },
  });

  export default CurrentWeather;
