import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import useColor from "../../useColor";
import { BudgetNav } from "./Budget";

export type CategoryProps = {
  name: string;
  spent: number;
  amount: number;
  showSpent: boolean;
  id: string;
};

export default function Category({
  name,
  spent,
  amount,
  showSpent,
  id,
}: CategoryProps) {
  const navigation = useNavigation<BudgetNav>();
  let number = amount - spent;
  if (showSpent) {
    number = spent;
  }
  let percent = (1 - number / amount) * 100;
  const color = useColor();
  return (
    <TouchableHighlight onPress={() => navigation.push("BudgetModal", { id })}>
      <View
        style={{
          padding: 15,
          borderBottomWidth: 2,
          borderColor: color.border,
          backgroundColor: color.card,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={{ fontSize: 20, color: color.font }}>{name}</Text>
          <View style={{ flex: 1 }} />
          <Text style={{ fontSize: 20, fontWeight: "600", color: color.font }}>
            ${number}
          </Text>
          <Text style={{ lineHeight: 20, color: color.font }}>/${amount}</Text>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            backgroundColor: color.accent,
            height: 4,
            width: "100%",
            borderRadius: 2,
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#F2F2F2C0",
              height: "100%",
              width: `${percent}%`,
            }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
}
