import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { useController, UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";
import Labeled from "./Labeled";

const StyledInput = styled.TextInput`
  font-size: 20px;
  padding: 15px;
  padding-left: 0;
  text-align: right;
  color: ${(props) => props.theme.color.accent};
  width: 100%;
`;
interface TextFieldProps
  extends UseControllerProps,
    Omit<TextInputProps, "defaultValue"> {
  label: string;
}

export default function TextField({
  placeholder,
  label,
  ...props
}: TextFieldProps) {
  const theme = useTheme();
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController(props);
  return (
    <Labeled label={label} error={error?.message}>
      <StyledInput
        onChangeText={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        placeholder={placeholder}
        ref={ref} // send input ref, so we can focus on input when error appear
        {...props}
        placeholderTextColor={theme.color.placeholder}
      />
    </Labeled>
  );
}
