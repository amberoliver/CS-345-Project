import { View, Text } from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";

const mockCategories = [
  { name: "Food", remaining: 200, total: 300, color: "#6B7AFF" },
  { name: "Rent", remaining: 400, total: 400, color: "#FF6BF0" },
  { name: "Entertainment", remaining: 50, total: 50, color: "#6BFF8C" },
  { name: "Transportation", remaining: 40, total: 70, color: "#FF6B6B" },
];
import Category from "../components/Category";
export default function Categories() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 8,
      }}
    >
      {mockCategories.map((cat, index) => (
        <View style={{ width: "50%", padding: 8, paddingLeft: 0 }} key={index}>
          <Category {...cat} />
        </View>
      ))}
      <View style = {{width: "100%", flexDirection: "column", display: "block"}}>
      <Button title="Add Category" onPress={() => console.log("button pressed")} />
      </View>
    </View>
  );
}
