import { useMemo } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Labeled from "./Labeled";

interface SelectFieldProps extends UseControllerProps {
  label: string;
  placeholder?: string;
  items: { label: string; value: any }[];
}
export default function SelectField({
  placeholder,
  label,
  items,
  ...props
}: SelectFieldProps) {
  const {
    field: { onChange, onBlur, value, name, ref },

    fieldState: { error },
  } = useController(props);

  const pickerSelectStyles = useMemo(
    () =>
      StyleSheet.create({
        inputIOS: {
          fontSize: 20,
          padding: 15,
          color: "blue",
          textAlign: "right",
        },
        inputAndroid: {
          fontSize: 20,
          padding: 15,
          color: "blue",
          textAlign: "right",
        },
      }),
    ["blue"]
  );

  return (
    <Labeled label={label} error={error?.message}>
      <RNPickerSelect
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        onValueChange={onChange}
        onClose={onBlur}
        ref={ref}
        value={value}
        placeholder={{
          label: placeholder,
          value: null,
          color: "#9EA0A4",
        }}
        items={items.map((item) => ({ ...item, key: item.value }))}
      />
    </Labeled>
  );
}
