import moment from "moment";
import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useColor from "../useColor";
type Props = {
  date: Date;
  dateChange: (date: Date) => void;
};
export default function DateInput({ date, dateChange }: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    dateChange(date);
    hideDatePicker();
  };
  const color = useColor();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 2,
        borderColor: color.border,
        backgroundColor: color.card,
      }}
      onPress={showDatePicker}
    >
      <Text style={{ fontSize: 20, padding: 10, color: color.font }}>Date</Text>
      <Text
        style={{
          fontSize: 20,
          padding: 10,
          flex: 1,
          textAlign: "right",
          color: color.accent,
        }}
      >
        {moment(date).format("MMMM Do, h:mm a")}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
}
