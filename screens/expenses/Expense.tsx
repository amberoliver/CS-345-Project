import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import useColor from "../../useColor";
import type { ExpensesNav } from "./Expenses";
export type ExpenseProps = {
  name: string;
  cost: number;
  category: string;
  date: string;
  id: string;
};
export default function Expense({
  name,
  cost,
  category,
  date,
  id,
}: ExpenseProps) {
  const navigation = useNavigation<ExpensesNav>();
  console.log(date);
  const color = useColor();
  return (
    <TouchableHighlight onPress={() => navigation.push("ExpenseModal", { id })}>
      <View
        style={{
          padding: 15,
          borderBottomWidth: 2,
          borderColor: color.border,
          backgroundColor: color.card,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, fontSize: 20, color: color.font }}>
            {name}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "600", color: color.font }}>
            ${cost}
          </Text>
        </View>
        <View style={{ height: 8 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, color: color.accent, fontWeight: "bold" }}>
            {category}
          </Text>
          <Text style={{ color: color.font }}>
            {moment(date).format("MMMM Do YYYY, h:mma")}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
