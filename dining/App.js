/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type { Node } from 'react';
import Home from './src/screens/Home';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
      <Home />
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
