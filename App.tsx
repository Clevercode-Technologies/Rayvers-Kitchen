import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store } from "./src/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NativeBaseProvider } from "native-base";
import { AppRoot } from "./src/navigation";
import { View } from "react-native";
import { ChefFoodDetails } from './src/screens';

const App = () => {
  const [fontLoaded] = useFonts({
    "Bold-Sen": require("./assets/fonts/Sen-Bold.ttf"),
    "ExtraBold-Sen": require("./assets/fonts/Sen-ExtraBold.ttf"),
    "Regular-Sen": require("./assets/fonts/Sen-Regular.ttf"),
    "SemiBold-Sen": require("./assets/fonts/Sen-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <AppRoot />
            </View>
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
