import styled from "@emotion/native";
import { useController, UseControllerProps } from "react-hook-form";
import Labeled from "./Labeled";

interface TemplateProps extends UseControllerProps {
  label: string;
  placeholder?: string;
}
export default function Template({
  placeholder,
  label,
  ...props
}: TemplateProps) {
  const {
    field: { onChange, onBlur, value, name, ref },
  } = useController(props);
  return <Labeled label={label}>{/* input here */}</Labeled>;
}
