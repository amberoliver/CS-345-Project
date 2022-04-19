import moment from "moment";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Labeled from "./Labeled";
interface DateFieldProps extends UseControllerProps {
  label: string;
}
export default function DateField({ label, ...props }: DateFieldProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController(props);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };
  return (
    <Labeled label={label} error={error?.message} onPress={showDatePicker}>
      <Text
        style={{
          fontSize: 20,
          padding: 15,
          flex: 1,
          textAlign: "right",
          color: "blue",
        }}
      >
        {moment(value).format("MMMM Do, h:mm a")}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Labeled>
  );
}
