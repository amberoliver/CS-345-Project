import { View, Text } from "react-native";
import { Box, FormControl, Input, Select } from "native-base";
import CurrencyInput from "react-native-currency-input";
import React from "react";

export default function TransactionEdit() {
  const [value, setValue] = React.useState(2310.458); // can also be null
  let [service, setService] = React.useState("");
  return (
    <View style={{ padding: 15 }}>
      <Box alignItems="center">
        <FormControl>
          <FormControl.Label>Item</FormControl.Label>
          <Input placeholder="Enter Item" />
          <FormControl.Label>Cost</FormControl.Label>
          <CurrencyInput
            style={{
              padding: 5,
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "#e0e0e0",
            }}
            value={value}
            onChangeValue={setValue}
            prefix="$"
            delimiter=","
            minValue={0}
            separator="."
            precision={2}
            onChangeText={(formattedValue) => {
              console.log(formattedValue); // $2,310.46
            }}
          />
          <FormControl.Label>Category</FormControl.Label>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Category"
            placeholder="Choose Category"
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </FormControl>
      </Box>
    </View>
  );
}
