import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
interface SelectProps {
  placeholder: string;
  onValueChange: (val: string) => void;
  items: { label: string; value: any }[];
  title: string;
}
export default function Select({
  placeholder,
  onValueChange,
  items,
  title,
}: SelectProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 2,
        borderColor: "#F6F6F6",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 20, padding: 10 }}>{title}</Text>
      <View style={{ flex: 1 }}>
        <RNPickerSelect
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          onValueChange={onValueChange}
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    padding: 10,
    color: "blue",
    textAlign: "right",
  },
  inputAndroid: {
    fontSize: 20,
    padding: 10,
    color: "blue",
    textAlign: "right",
  },
});
