/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/state';

import ReduxExample from './src/screens/ReduxExample';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ReduxExample/>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default App;
