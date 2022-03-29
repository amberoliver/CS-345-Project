import { StyleSheet } from "react-native";
export default StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    backgroundColor: "white",
    borderColor: "#DEDEDE",
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    margin: 4,
  },
  content: {
    padding: 15,
  },
});
