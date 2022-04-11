import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import CategoryModal from "../screens/budget/CategoryModal";
import ExpenseModal from "../screens/expenses/ExpenseModal";
import Tabs, { TabParamList } from "./Tabs";
export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  ExpenseModal: { id: string };
  BudgetModal: { id: string };
};
const Stack = createStackNavigator<RootStackParamList>();

export default function Root() {
  let scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExpenseModal"
          component={ExpenseModal}
          options={{ presentation: "modal" }}
          initialParams={{ id: undefined }}
        />
        <Stack.Screen
          name="BudgetModal"
          component={CategoryModal}
          options={{ presentation: "modal", title: "Add Category" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
