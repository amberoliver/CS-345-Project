import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import useColor from "../useColor";
interface SelectProps {
  placeholder: string;
  onValueChange: (val: string) => void;
  items: { label: string; value: any }[];
  title: string;
  value: string;
}
export default function Select({
  placeholder,
  onValueChange,
  items,
  title,
  value,
}: SelectProps) {
  const color = useColor();
  const pickerSelectStyles = useMemo(
    () =>
      StyleSheet.create({
        inputIOS: {
          fontSize: 20,
          padding: 10,
          color: color.accent,
          textAlign: "right",
        },
        inputAndroid: {
          fontSize: 20,
          padding: 10,
          color: color.accent,
          textAlign: "right",
        },
      }),
    [color.accent]
  );

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 2,
        borderColor: color.border,
        backgroundColor: color.card,
      }}
    >
      <Text style={{ fontSize: 20, padding: 10, color: color.font }}>
        {title}
      </Text>
      <View style={{ flex: 1 }}>
        <RNPickerSelect
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          onValueChange={onValueChange}
          value={value}
          placeholder={{
            label: placeholder,
            value: null,
            color: "#9EA0A4",
          }}
          items={items.map((item) => ({ ...item, key: item.value }))}
        />
      </View>
    </View>
  );
}
