import { Text, View } from "react-native";
export type ExpenseProps = {
  name: string;
  cost: number;
  categoryName: string;
  date: string;
  id: string;
};
export default function Expense({
  name,
  cost,
  categoryName,
  date,
}: ExpenseProps) {
  return (
    <View
      style={{
        padding: 15,
        borderBottomWidth: 2,
        borderColor: "#F6F6F6",
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1, fontSize: 20 }}>{name}</Text>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>${cost}</Text>
      </View>
      <View style={{ height: 8 }} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1, color: "#3B82F6" }}>{categoryName}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
}
