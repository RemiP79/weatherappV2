/*import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Weather from './Weather'; // Assurez-vous que le chemin vers Weather est correct

const ForecastWeather = ({ data }) => {
  const [groupedForecasts, setGroupedForecasts] = useState([]);

  // Fonction pour regrouper les prévisions météo par jour
  const groupForecastsByDay = (forecasts) => {
    const groupedData = forecasts.reduce((acc, forecast) => {
      const date = new Date(forecast.dt * 1000); // Convertir le timestamp en date
      const day = date.toISOString().split('T')[0]; // Récupérer uniquement la date (année-mois-jour)

      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(forecast);
      return acc;
    }, {});

    return Object.entries(groupedData).map(([day, forecasts]) => ({
      day,
      forecasts,
    }));
  };

  // Utiliser useEffect pour regrouper les prévisions météo quand la props data change
  useEffect(() => {
    if (data && data.length > 0) {
      const grouped = groupForecastsByDay(data);
      setGroupedForecasts(grouped);
    }
  }, [data]);

  if (!data || data.length === 0) {
    return <Text style={styles.text}>Chargement des prévisions météo...</Text>;
  }

  return (
    <ScrollView horizontal style={styles.container}>
      {groupedForecasts.map((group, index) => (
        <View key={index} style={styles.dayContainer}>
          
          <Text style={styles.dayLabel}>
            {new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(
              new Date(group.day)
            )}
          </Text>

          
          <ScrollView horizontal>
            {group.forecasts.map((forecast, idx) => (
              <Weather
                key={idx}
                time={new Date(forecast.dt * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                icon={forecast.weather[0].icon}
                temperature={forecast.main.temp.toFixed(1)}
              />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  dayContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ForecastWeather;







/*import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ShowIcon from './ShowIcon'; // Assurez-vous que le chemin vers ShowIcon est correct

const ForecastWeather = ({ data }) => {
  if (!data || data.length === 0) {
    return <Text style={styles.text}>Chargement des prévisions météo...</Text>;
  }

  const getDayLabel = (forecastDate) => {
    const today = new Date();
    const forecastDay = new Date(forecastDate);
    const diffTime = forecastDay - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return 'Demain';
    } else if (diffDays === 2) {
      return 'Après-demain';
    } else {
      const options = { weekday: 'long' }; // Afficher le jour en toutes lettres
      return new Intl.DateTimeFormat('fr-FR', options).format(forecastDay);
    }
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {data.map((forecast, index) => {
        const date = new Date(forecast.dt * 1000); // Date de la prévision
        const dayLabel = getDayLabel(date);
        const temperature = forecast.main.temp.toFixed(1);
        const icon = forecast.weather[0].icon; // Identifiant de l'icône météo

        return (
          <View key={index} style={styles.forecastItem}>
            {/* Jour }
            <Text style={styles.dayLabel}>{dayLabel}</Text>
            
            {/* Icône météo }
            <ShowIcon icon={icon} />
            
            {/* Température }
            <Text style={styles.tempLabel}>{`${temperature}°C`}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  forecastItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Centrer verticalement
    minWidth: 120,  // Largeur minimale pour garantir un peu d'espace
    maxWidth: 180,  // Largeur maximale pour éviter que l'élément ne devienne trop large
   // minHeight: 60,  // Hauteur minimale si nécessaire
    maxHeight: 150
  },
  dayLabel: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    minWidth: 170,   // Largeur minimale du texte
    maxWidth: 'auto',  // Largeur maximale du texte
  },
  tempLabel: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 35,
    minWidth: 80,   // Largeur minimale pour éviter le troncage
    maxWidth: 150,  // Largeur maximale pour éviter que le texte ne prenne trop de place
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ForecastWeather;*/
