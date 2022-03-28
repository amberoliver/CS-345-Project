import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "./components/Card";
import { Category } from "./components/Category";
import { Chart } from "./components/Chart";
import { RecentTransactionHome } from "./components/RecentTransactionHome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Card></Card>
      <Category></Category>
      <Chart></Chart>
      <RecentTransactionHome></RecentTransactionHome>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
