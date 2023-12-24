import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RouteSelection } from './src/screens';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

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
      <RouteSelection />
    </View>
  );
}

export default App;