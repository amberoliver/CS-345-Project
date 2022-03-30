import { View, Text } from "react-native";
import Card from "../components/Card";
import Transaction from "../components/Transaction";
import Button from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";

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
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
  {
    name: "Movie Ticket",
    amount: -10,
    date: Date.parse("Mar 2, 2019"),
    category: { name: "Entertainment", color: "#6BFF8C" },
  },
];
export default function Transactions() {
  return (
    <ScrollView>
      <Card margin noPad>
        {mockTransactions.map((data, index) => (
          <Transaction {...data} key={index} />
        ))}
      </Card>
    </ScrollView>
  );
}
