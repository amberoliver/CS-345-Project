import { Text, View } from "react-native";
import useColor from "../useColor";

export default function Message({ children }: { children: string }) {
  const color = useColor();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text
        style={{
          color: color.accent,
          margin: 15,
          fontSize: 20,
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {children}
      </Text>
    </View>
  );
}
