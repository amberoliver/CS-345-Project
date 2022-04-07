import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import CategoryModal from "../screens/budget/CategoryModal";
import ExpenseModal from "../screens/expenses/ExpenseModal";
import Tabs, { TabParamList } from "./Tabs";
export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  ExpenseModal: { id: string };
  BudgetModal: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default function Root() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
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
