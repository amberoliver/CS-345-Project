import type { TextInputProps } from "react-native";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useColor from "../useColor";
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
  const color = useColor();
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
      <Input
        style={[
          {
            padding: 10,
            flex: 1,
            fontSize: 20,
            textAlign: "right",
            color: color.accent,
          },
          style,
        ]}
        {...rest}
      />
    </View>
  );
}
