import { StyleSheet, Text, View } from "react-native";

export type CategoryProps = {
  name: string;
  spent: number;
  total: number;
  show?: "remaining" | "spent";
  id: string;
};

export default function Category({
  name,
  spent,
  total,
  show = "spent",
}: CategoryProps) {
  const amount = { remaining: total - spent, spent }[show];
  const percent = (1 - amount / total) * 100;
  return (
    <View
      style={{
        padding: 15,
        borderBottomWidth: 2,
        borderColor: "#F6F6F6",
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <View style={{ flex: 1 }} />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>${amount}</Text>
        <Text style={{ lineHeight: 20 }}>/${total}</Text>
      </View>
      <View style={{ height: 8 }} />
      <View
        style={{
          backgroundColor: "#3B82F6",
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
  );
}
