// In App.js in a new project
import "react-native-gesture-handler";
import * as React from "react";
import { useRef, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import TransactionEdit from "./pages/TransactionEdit";
import Transactions from "./pages/Transactions";
import { Feather } from "@expo/vector-icons";
import Settings from "./pages/Settings";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Graphs from "./pages/Graphs";

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <MyContext.Consumer>
      {({ bottomSheetRef }) => (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#6B7AFF",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: (props) => <Feather name="home" {...props} />,
            }}
          />
          <Tab.Screen
            name="Graphs"
            component={Graphs}
            options={{
              tabBarIcon: (props) => <Feather name="pie-chart" {...props} />,
            }}
          />
          <Tab.Screen
            name="Add"
            component={TransactionEdit}
            options={{
              tabBarButton: (props) => (
                <Pressable
                  {...props}
                  style={[
                    props.style,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <View
                    style={{
                      shadowColor: "black",
                      shadowOpacity: 0.1,
                      shadowRadius: 2,
                      shadowOffset: { width: 2, height: 2 },
                      height: "80%",
                      aspectRatio: 1,
                      backgroundColor: "#6B7AFF",
                      justifyContent: "center",
                      borderRadius: 1000,
                      alignItems: "center",
                    }}
                  >
                    <Feather name="plus" size={28} color="white" />
                  </View>
                </Pressable>
              ),
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
                bottomSheetRef.current.snapToIndex(0);
              },
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
      )}
    </MyContext.Consumer>
  );
}

const Stack = createNativeStackNavigator();
const MyContext = React.createContext({ bottomSheetRef: null });
function App() {
  // ref
  const bottomSheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ["50%", "80%"], []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyContext.Provider value={{ bottomSheetRef }}>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <BottomSheet
            style={{ zIndex: 1000, elevation: 1000 }}
            snapPoints={snapPoints}
            ref={bottomSheetRef}
            index={-1}
            enablePanDownToClose
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                {...props}
              />
            )}
          >
            <TransactionEdit />
          </BottomSheet>
        </View>
      </MyContext.Provider>
    </GestureHandlerRootView>
  );
}

export default App;
