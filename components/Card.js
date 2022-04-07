import { View, Pressable } from "react-native";
import useColor from "../useColor";
export default function Card({
  children,
  color,
  onPress,
  contentStyle,
  margin,
  noPad,
}) {
  const c = useColor();
  return (
    <Pressable
      style={{
        shadowColor: "black",
        shadowOpacity: 0.1,
        backgroundColor: c.card,
        borderColor: c.border,
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        margin: (() => {
          if (margin) return 8;
        })(),
      }}
      onPress={onPress}
      nativeID={"card"}
    >
      <View
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          flexDirection: "row",
          overflow: "hidden",
          borderRadius: 8,
        }}
      >
        {color && <View style={{ backgroundColor: color, width: 8 }}></View>}
        <View
          style={{
            padding: noPad ? 0 : 15,
            flex: 1,
            ...contentStyle,
          }}
        >
          {children}
        </View>
      </View>
    </Pressable>
  );
}
