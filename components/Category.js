import { Text } from "react-native";
import Card from "./Card";

export default function Category({ color, remaining, total, name, onPress }) {
  return (
    <Card
      color={color}
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text>{name}</Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>${total}</Text>
      <Text>${remaining} remaining</Text>
    </Card>
  );
}
