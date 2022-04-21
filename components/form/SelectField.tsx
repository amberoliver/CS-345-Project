import { useTheme } from "@emotion/react";
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
  const { color } = useTheme();
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
          color: color.accent,
          textAlign: "right",
        },
        inputAndroid: {
          fontSize: 20,
          padding: 15,
          color: color.accent,
          textAlign: "right",
        },
      }),
    [color]
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
        }}
        items={items.map((item) => ({ ...item, key: item.value }))}
      />
    </Labeled>
  );
}
