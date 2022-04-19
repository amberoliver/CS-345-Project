import { Text, View } from "react-native";

export default function CategoryTag({ color, name, remaining }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
      }}
    >
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 100,
          backgroundColor: color,
          margin: 3,
        }}
      />
      <Text style={{ margin: 3 }}>{name}</Text>
      {remaining && (
        <Text style={{ margin: 3, fontWeight: "bold" }}>${remaining}</Text>
      )}
    </View>
  );
}
