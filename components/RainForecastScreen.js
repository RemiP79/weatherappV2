import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function RainForecastScreen() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://openweathermap.org/weathermap?basemap=map&layers=precipitation&lat=46.6034&lon=1.8883&zoom=5' }}
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


/*import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

const API_KEY = "d6def4924ad5f9a9b59f3ae895b234cb";

const RainForecastScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.6034,  // Centre approximatif de la France
          longitude: 1.8883,
          latitudeDelta: 5,   // Zoom adapté pour toute la France
          longitudeDelta: 5,
        }}
        mapType="none" // Désactive la carte de base pour n'afficher que les tuiles
      >
        <UrlTile
          urlTemplate="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid={API_KEY"
          maximumZ={19}
          flipY={false}
        />
      </MapView>
    </View>
  );
};

export default RainForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

*/

/*
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

const API_KEY = "d6def4924ad5f9a9b59f3ae895b234cb";
const RainForecastScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.603354,
          longitude: 1.888334,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        <UrlTile
          urlTemplate="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=d6def4924ad5f9a9b59f3ae895b234cb"
          zIndex={1}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default RainForecastScreen;*/
