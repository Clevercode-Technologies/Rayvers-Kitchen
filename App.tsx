import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { RootState, persistor, store } from "./src/Redux/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NativeBaseProvider } from "native-base";
import { AppRoot } from "./src/navigation";
import { View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
// import { enableFreeze } from 'react-native-screens';
// enableFreeze(true);

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

  const STRIPE_PUBLISHABLE_KEY = 'pk_test_51OfN36FeGaAoGW3hZ47hPvdH6KlFpyNjGLCpXATFu4RLNmacchmTMYAAVJLqAn8jl0tPw52LGGJv22cgHRaPUik500XeuXA1Ey';

  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
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
    </StripeProvider>
  );
};

export default App;
