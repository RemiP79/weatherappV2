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
