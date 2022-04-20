import { Pressable, Text } from "react-native";
import useColor from "../useColor";
export default function Button({ onPress, title, color = "blue" }) {
  const c = useColor();
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: c.accent,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        margin: 8,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 2 },
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
