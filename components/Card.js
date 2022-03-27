import { View } from "react-native";
export function Card({ children }) {
  return (
    <View
      style={{
        shadowColor: "black",
        shadowOpacity: 0.2,
        backgroundColor: "white",
        borderColor: "#DEDEDE",
        padding: 15,
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 16,
        borderWidth: 1,
      }}
    >
      {children}
    </View>
  );
}
