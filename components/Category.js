import { Text } from "react-native";
import { View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
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

// export function SpecificCategory({ name, color, amount }) {
//   return (
//     <View
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: "100%",
//         justifyContent: "space-between",
//       }}
//     >
//       <View
//         style={{
//           width: 10,
//           height: 50,
//           borderRadius: 10,
//           backgroundColor: color,
//         }}
//       ></View>
//       <Text>{name}</Text>
//       <Text>{amount}</Text>
//     </View>
//   );
// }
