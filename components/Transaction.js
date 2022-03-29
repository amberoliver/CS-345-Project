import CategoryTag from "./CategoryTag";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import moment from "moment";
export default function Transaction({ date, amount, name, category }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#EAEAEA",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18 }}>{name}</Text>
        <Text
          style={{ fontSize: 18, color: amount < 0 ? "#FF6B6B" : "#6BFF8C" }}
        >
          ${amount}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CategoryTag {...category} />
        <TimeTag date={date} />
      </View>
    </View>
  );
}

function TimeTag({ date }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 5 }}>
      <Ionicons name="ios-time" size={16} color="gray" />
      <Text style={{ marginLeft: 3 }}>
        {moment(date).format("MMMM Do, h:mma")}
      </Text>
    </View>
  );
}
