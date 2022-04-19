import styled from "@emotion/native";
import { useController, UseControllerProps } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import Labeled from "./Labeled";

const StyledInput = styled(CurrencyInput)`
  font-size: 20px;
  padding: 15px;
  padding-left: 0;
  text-align: right;
  color: blue;
  width: 100%;
`;

interface CurrencyFieldProps extends UseControllerProps {
  label: string;
  placeholder?: string;
}
export default function CurrencyField({ label, ...props }: CurrencyFieldProps) {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController(props);
  return (
    <Labeled label={label} error={error?.message}>
      <StyledInput
        value={value}
        onChangeValue={onChange}
        prefix="$"
        delimiter=","
        separator="."
        onBlur={onBlur}
        precision={2}
        placeholder="$0.00"
      />
    </Labeled>
  );
}
