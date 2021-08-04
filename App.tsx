import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCreditCard, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import { store } from './src/state';

import Colors from './src/theme/Color';
import Size from './src/theme/Size';

import ReduxExample from './src/screens/ReduxExample';
import Home from './src/screens/Home';
import Income from './src/screens/Income';
import Outcome from './src/screens/Outcome';
import Profile from './src/screens/Profile';

import StatusBar from './src/components/AppStatusBar';

const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.pastelPink,
  },
  fonts: {
    regular: 1
  },
};

const App = () => {

  React.useEffect(() => {
    RNBootSplash.hide({ fade: true });
    console.log("Bootsplash has been hidden successfully");
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={Colors.pastelPink} barStyle="light-content" />
          <SafeAreaView style={styles.container}>
            {/* <ReduxExample/> */}
            <Tab.Navigator
              initialRouteName="Home"
              tabBarOptions={{
                activeTintColor: Colors.pastelPink,
                labelStyle: {
                  fontSize: Size.medium
                }
              }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarIcon: (props) => (
                    <FontAwesomeIcon icon={faHome} color={Colors.pastelPink} size={24} />
                  )
                }}
              />
              <Tab.Screen
                name="Income"
                component={Income}
                options={{
                  tabBarIcon: (props) => (
                    <FontAwesomeIcon icon={faCreditCard} color={Colors.pastelPink} size={24} />
                  )
                }}
              />
              <Tab.Screen
                name="Outcome"
                component={Outcome}
                options={{
                  tabBarIcon: (props) => (
                    <FontAwesomeIcon icon={faShoppingCart} color={Colors.pastelPink} size={24} />
                  )
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarIcon: (props) => (
                    <FontAwesomeIcon icon={faUserCircle} color={Colors.pastelPink} size={24} />
                  )
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  }
});

export default App;
