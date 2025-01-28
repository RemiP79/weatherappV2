import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ShowIcon = ({ icon, resolution = '2x', size = 50 }) => {
  // Construire l'URL de l'icône
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@${resolution}.png`;

  return (
    <Image
      source={{ uri: iconUrl }}
      style={[styles.image, { width: size, height: size }]} // Taille configurable
    />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain', // S'assurer que l'image est bien affichée
  },
});

export default ShowIcon;




/*import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ShowIcon = ({ icon }) => {
  if (!icon) return null; // Ne rien afficher si aucune icône n'est passée

  // URL de l'icône depuis l'API OpenWeather
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: iconUrl }} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80, // Ajustez la taille selon vos besoins
    height: 80,
  },
});

export default ShowIcon;*/
