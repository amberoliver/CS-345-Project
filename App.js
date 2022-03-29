// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import TransactionEdit from "./pages/TransactionEdit";
import Transactions from "./pages/Transactions";
import { Feather } from "@expo/vector-icons";
import Settings from "./pages/Settings";

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => <Feather name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: (props) => <Feather name="pie-chart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={TransactionEdit}
        options={{
          tabBarIcon: (props) => <Feather name="plus" {...props} />,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: (props) => <Feather name="file-text" {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => <Feather name="settings" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
