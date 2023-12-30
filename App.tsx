import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomerHome, SearchResult } from './src/screens';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from './src/Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const [fontLoaded] = useFonts({
    'Bold-Sen': require('./assets/fonts/Sen-Bold.ttf'),
    'ExtraBold-Sen': require('./assets/fonts/Sen-ExtraBold.ttf'),
    'Regular-Sen': require('./assets/fonts/Sen-Regular.ttf'),
    'SemiBold-Sen': require('./assets/fonts/Sen-SemiBold.ttf'),
  })


  const onLayoutRootView = useCallback(async () => {
    if(fontLoaded) {
      await SplashScreen.hideAsync();
    }

  }, [fontLoaded]);

  if(!fontLoaded) {
    return null;
  }

  return (
    <View>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SearchResult />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </View>
  );
}

export default App;