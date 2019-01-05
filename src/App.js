
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default App = () => (
  <View style={styles.container}>
    <Header />
    <Body />
    <Footer />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
