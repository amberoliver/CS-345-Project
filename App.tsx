import "react-native-gesture-handler";
import Root from "./navigation/Root";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useContext, useMemo } from "react";
import { ColorPropType, ColorSchemeName, useColorScheme } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </Provider>
    </NativeBaseProvider>
  );
}
