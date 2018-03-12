import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

const App = () => (
  <View style={styles.container}>
    <HomeScreen />
  </View>
);

export default App;
