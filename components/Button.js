import { ActivityIndicator, Pressable, Text } from "react-native";
import useColor from "../useColor";
export default function Button({
  onPress,
  title,
  color = "blue",
  loading = false,
}) {
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
        flexDirection: "row",
        justifyContent: "center",
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
      {loading && (
        <ActivityIndicator style={{ marginLeft: 10 }} color="white" />
      )}
    </Pressable>
  );
}
