import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const ShowIcon = ({ icon }) => {
  if (!icon) return null; // Ne rien afficher si aucune icône n'est passée

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const handleError = (error) => {
    console.log('Erreur lors du chargement de l\'image :', error.nativeEvent);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: iconUrl }} 
        style={styles.icon} 
        resizeMode="contain" 
        onError={handleError} // On ajoute la gestion de l'erreur ici
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
});

export default ShowIcon;