import { View, Text } from "react-native";
import Chart from "../components/Chart";
const mockCategories = [
  { name: "Food", remaining: 200, total: 300, color: "#6B7AFF" },
  { name: "Rent", remaining: 400, total: 400, color: "#FF6BF0" },
  { name: "Entertainment", remaining: 50, total: 50, color: "#6BFF8C" },
  { name: "Transportation", remaining: 40, total: 70, color: "#FF6B6B" },
];
export default function Home() {
  return (
    <View>
      <Chart categories={mockCategories} />
    </View>
  );
}
