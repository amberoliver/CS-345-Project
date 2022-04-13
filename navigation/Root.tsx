import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Start from "../screens/auth/Start";
import CategoryModal from "../screens/budget/CategoryModal";
import ExpenseModal from "../screens/expenses/ExpenseModal";
import Tabs, { TabParamList } from "./Tabs";
export type RootStackParamList = {
  Tabs: undefined;
  ExpenseModal: { id: string };
  BudgetModal: { id: string };
  Login: undefined;
  Register: undefined;
  Start: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default function Root() {
  let scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <Stack.Navigator initialRouteName="Start">
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
