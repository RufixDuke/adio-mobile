import { useCallback, useEffect, useState } from "react";
import { RootStack } from "./navigation/RootStack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
          Light: require("./assets/fonts/OpenSans-Light.ttf"),
          Medium: require("./assets/fonts/OpenSans-Medium.ttf"),
          Regular: require("./assets/fonts/OpenSans-Regular.ttf"),
          SemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return <RootStack />;
}
