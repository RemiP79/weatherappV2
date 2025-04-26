import React, { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import BurgerMenu from './BurgerMenu'; // Assurez-vous que le chemin est correct

const { width, height } = Dimensions.get('window');

export default function RainForecastScreen() {
  const [loading, setLoading] = useState(true);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Carte pluie</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
      />
      <style>
        html, body, #map {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
      <script>
        const map = L.map('map').setView([46.6, 2.2], 5);
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '',
          maxZoom: 19,
        }).addTo(map);
        
        const precipLayer = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=d6def4924ad5f9a9b59f3ae895b234cb', {
          opacity: 0.6,
        });
        
        precipLayer.addTo(map);
      </script>
    </body>
    </html>
  `;

  // Callback appelé lors du chargement de la page dans le WebView
  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.burgerWrapper}>
        <BurgerMenu />
      </View>      

      {/* WebView avec le contenu HTML */}
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
        onLoadEnd={handleLoadEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top : 0,
    left : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  burgerWrapper: {
    position: 'absolute',    
    left: 0,     
    zIndex: 1, 
  },
  webview: {
    top : 50,
    flex: 1,
  },
  
});