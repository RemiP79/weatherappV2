import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

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
        onSubmitEditing={handleSearch} // Déclenche la recherche lors de l'appui sur "OK" ou "Entrée"
        returnKeyType="search" // Change la touche "Retour" en "Rechercher"
      />
      
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Rechercher</Text> 
      </TouchableOpacity>
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SearchBar;