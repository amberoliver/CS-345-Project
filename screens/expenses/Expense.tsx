import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { RootStackParamList } from "../../navigation/Root";
export type ExpenseProps = {
  name: string;
  cost: number;
  category: string;
  date: string;
  id: string;
};
import type { ExpensesNav } from "./Expenses";
export default function Expense({
  name,
  cost,
  category,
  date,
  id,
}: ExpenseProps) {
  const navigation = useNavigation<ExpensesNav>();
  console.log(date);
  return (
    <TouchableHighlight onPress={() => navigation.push("ExpenseModal", { id })}>
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
          <Text style={{ flex: 1, color: "#3B82F6" }}>{category}</Text>
          <Text>{moment(date).format("MMMM Do YYYY, h:mma")}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
