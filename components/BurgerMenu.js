// components/BurgerMenu.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BurgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigateTo('Accueil')}>
            <Text style={styles.menuItem}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('chercher ma ville')}>
            <Text style={styles.menuItem}>Chercher une ville</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Prévisions de pluie')}>
            <Text style={styles.menuItem}>Prévisions de pluie</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 1000,
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default BurgerMenu;
