import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import type { TextInputProps } from "react-native";
export interface InputProps extends TextInputProps {
  title: string;
  inputComponent?: any;
}
export default function Input({
  title,
  style,
  inputComponent: Input = TextInput,
  ...rest
}: InputProps | any) {
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
      <Input
        style={[
          {
            padding: 10,
            flex: 1,
            fontSize: 20,
            textAlign: "right",
            color: "blue",
          },
          style,
        ]}
        {...rest}
      />
    </View>
  );
}
