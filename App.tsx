import "react-native-gesture-handler";
import Root from "./navigation/Root";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useContext, useMemo } from "react";
import { ColorPropType, ColorSchemeName, useColorScheme } from "react-native";

import FormTest from "./components/form/FormTest";
import { ThemeProvider } from "@emotion/react";
import useColor from "./useColor";

// You are also able to use a 3rd party theme this way:
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      card: string;
      font: string;
      border: string;
      accent: string;
      placeholder: string;
    };
  }
}

export default function App() {
  const color = useColor();
  return (
    <ThemeProvider theme={{ color }}>
      <NativeBaseProvider>
        <Provider store={store}>
          <SafeAreaProvider>
            <Root />
          </SafeAreaProvider>
        </Provider>
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
