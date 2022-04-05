import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BudgetScreen from "../screens/budget/Budget";
import ExpensesScreen from "../screens/expenses/Expenses";

import { Entypo } from "@expo/vector-icons";
import { RootStackParamList } from "./Root";
import Settings from "../pages/Settings";
import Graphs from "../pages/Graphs";
const Tab = createBottomTabNavigator<TabParamList>();

export type TabParamList = {
  Budget: undefined;
  Expenses: undefined;
  Graphs: undefined;
  Settings: undefined;
};

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarIcon: (props) => <Entypo name="pie-chart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarIcon: (props) => <Entypo name="credit" {...props} />,
        }}
      />
      <Tab.Screen
        name="Graphs"
        component={Graphs}
        options={{
          tabBarIcon: (props) => <Entypo name="credit" {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => <Entypo name="credit" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
