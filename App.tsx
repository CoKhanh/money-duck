import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCreditCard, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl';
import 'intl';
import 'intl/locale-data/jsonp/de-DE';

import { Provider } from 'react-redux';
import { store } from './src/state';

import Colors from './src/theme/Color';
import Size from './src/theme/Size';

import ReduxExample from './src/screens/ReduxExample';
import Home from './src/screens/Home';
import Income from './src/screens/Income';
import Expense from './src/screens/Expense';
import Profile from './src/screens/Profile';

import StatusBar from './src/components/AppStatusBar';

if (Platform.OS === "android") {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof (Intl as any).__disableRegExpRestore === "function") {
      (Intl as any).__disableRegExpRestore();
  }
}

const Tab = createBottomTabNavigator();

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'EncodeSans-Regular',
      fontWeight: 'normal',
    } as React.CSSProperties,
    medium: {
      fontFamily: 'EncodeSans-Medium',
      fontWeight: 'normal',
    } as React.CSSProperties,
    light: {
      fontFamily: 'EncodeSans-Light',
      fontWeight: 'normal',
    } as React.CSSProperties,
    thin: {
      fontFamily: 'EncodeSans-Thin',
      fontWeight: 'normal',
    } as React.CSSProperties,
  },
  ios: {
    regular: {
      fontFamily: 'EncodeSans-Regular',
      fontWeight: 'normal',
    } as React.CSSProperties,
    medium: {
      fontFamily: 'EncodeSans-Medium',
      fontWeight: 'normal',
    } as React.CSSProperties,
    light: {
      fontFamily: 'EncodeSans-Light',
      fontWeight: 'normal',
    } as React.CSSProperties,
    thin: {
      fontFamily: 'EncodeSans-Thin',
      fontWeight: 'normal',
    } as React.CSSProperties,
  },
  android: {
    regular: {
      fontFamily: 'EncodeSans-Regular',
      fontWeight: 'normal',
    } as React.CSSProperties,
    medium: {
      fontFamily: 'EncodeSans-Medium',
      fontWeight: 'normal',
    } as React.CSSProperties,
    light: {
      fontFamily: 'EncodeSans-Light',
      fontWeight: 'normal',
    } as React.CSSProperties,
    thin: {
      fontFamily: 'EncodeSans-Thin',
      fontWeight: 'normal',
    } as React.CSSProperties,
  }
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.pastelPink,
  },
  fonts: configureFonts(fontConfig),
};

const cache = createIntlCache()

const intl = createIntl({
  locale: 'de-DE',
  messages: {}
}, cache)

const App = () => {

  React.useEffect(() => {
    RNBootSplash.hide({ fade: true });
    console.log("Bootsplash has been hidden successfully");
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RawIntlProvider value={intl}>
          <PaperProvider theme={theme}>
            <StatusBar backgroundColor={Colors.pastelPink} barStyle="light-content" />
            <View style={styles.container}>
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
                  name="Expense"
                  component={Expense}
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
            </View>
          </PaperProvider>
        </RawIntlProvider>
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
