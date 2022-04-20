import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Graphs from "../pages/Graphs";
import BudgetScreen from "../screens/budget/Budget";
import ExpensesScreen from "../screens/expenses/Expenses";
import Settings from "../screens/Settings";

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
          tabBarIcon: (props) => <Entypo name="menu" {...props} />,
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
          tabBarIcon: (props) => <Entypo name="pie-chart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => <Entypo name="cog" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
