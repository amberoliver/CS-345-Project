import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Card } from "./components/Card";
import Category from "./components/Category";
import CategoryTag from "./components/CategoryTag";
import { Chart } from "./components/Chart";
import { Item, Layout } from "./components/Layout";
import { RecentTransactionHome } from "./components/RecentTransactionHome";
import Transaction from "./components/Transaction";
import SaveAreaViewAndriod from "./utils/SaveAreaViewAndriod";

const mockCategories = [
  { name: "Food", remaining: 200, total: 300, color: "#6B7AFF" },
  { name: "Rent", remaining: 400, total: 400, color: "#FF6BF0" },
  { name: "Entertainment", remaining: 50, total: 50, color: "#6BFF8C" },
  { name: "Transportation", remaining: 40, total: 70, color: "#FF6B6B" },
];

const mockTransactions = [
  {
    name: "French Fries",
    amount: -400,
    date: Date.parse("August 5, 2020"),
    category: { name: "Food", color: "#6B7AFF" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
];
export default function App() {
  return (
    <SafeAreaView
      style={[styles.container, SaveAreaViewAndriod.AndroidSafeArea]}
    >
      <ScrollView>
        <StatusBar style="auto" />
        <Chart remaining={300} categories={mockCategories} />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: 8,
          }}
        >
          {mockCategories.map((cat, index) => (
            <View
              style={{ width: "50%", paddingEnd: 8, paddingBottom: 8 }}
              key={index}
            >
              <Category {...cat} />
            </View>
          ))}
        </View>
        <Card margin noPad>
          {mockTransactions.map((data, index) => (
            <Transaction {...data} key={index} />
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
