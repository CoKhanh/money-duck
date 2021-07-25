import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Provider } from 'react-redux';
import { store } from './src/state';

import ReduxExample from './src/screens/ReduxExample';
import Home from './src/screens/Home';
import Income from './src/screens/Income';
import Outcome from './src/screens/Outcome';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

const App = () => {

  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
    console.log("Bootsplash has been hidden successfully");
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {/* <ReduxExample/> */}
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Income" component={Income} />
            <Tab.Screen name="Outcome" component={Outcome} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
