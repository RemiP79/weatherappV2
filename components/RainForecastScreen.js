import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function RainForecastScreen() {
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
        const map = L.map('map').setView([46.6, 2.2], 6);
        
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

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});


