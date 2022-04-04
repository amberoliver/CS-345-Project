import { View, Text } from "react-native";
import { Box, FormControl, Input } from "native-base";

export default function TransactionEdit() {
  return (
    <View>
      <Box alignItems="center">
      <FormControl isInvalid w="75%" maxW="300px">
        <FormControl.Label>Item</FormControl.Label>
        <Input placeholder="Enter Item" />
      </FormControl>
    </Box>;
    </View>
  );
}
