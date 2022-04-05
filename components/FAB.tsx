import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
type Props = {
  onPress: () => void;
};
export default function FAB({ onPress }: Props) {
  return (
    <Pressable
      style={{
        width: 60,
        height: 60,
        backgroundColor: "blue",
        position: "absolute",
        right: 20,
        borderRadius: 100,
        bottom: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.1,
        shadowOffset: { width: 4, height: -4 },
        shadowRadius: 10,
      }}
      onPress={onPress}
    >
      <Entypo name="plus" size={32} color="white" />
    </Pressable>
  );
}
