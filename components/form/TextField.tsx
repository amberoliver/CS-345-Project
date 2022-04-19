import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import {
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { Keyboard, ReturnKeyType, TextInputProps } from "react-native";
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
  onLast?: () => void;
  onLastText?: string;
}

export default function TextField({
  placeholder,
  label,
  onLast,
  onLastText,
  ...props
}: TextFieldProps) {
  const theme = useTheme();
  const { setFocus, watch } = useFormContext();
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController(props);
  function getReturnKeyType() {
    let type: ReturnKeyType = onLast ? "go" : "next";
    if (props.keyboardType === "number-pad") {
      type = "done";
    }
    return type;
  }
  return (
    <Labeled label={label} error={error?.message}>
      <StyledInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        ref={ref}
        placeholderTextColor={theme.color.placeholder}
        blurOnSubmit={false}
        returnKeyType={getReturnKeyType()}
        returnKeyLabel={onLastText}
        onSubmitEditing={() => {
          let all = Object.entries(watch());
          let index = all.findIndex(([key]) => key == name);
          if (index < all.length - 1) setFocus(all[index + 1][0]);
          else {
            if (onLast) onLast();
            Keyboard.dismiss();
          }
        }}
        {...props}
      />
    </Labeled>
  );
}
