import styled from "@emotion/native";
import { Children, ReactChildren, ReactNode } from "react";
import { Text, View } from "react-native";

const Container = styled.Pressable<{ error: boolean }>`
  border-bottom-width: 2px;
  border-color: ${(props) => props.theme.color.border};
  background-color: ${(props) =>
    props.error ? "#ff00001b" : props.theme.color.card}; ;
`;
const Label = styled.Text`
  font-size: 20px;
  padding: 15px;
  color: ${(props) => props.theme.color.font};
`;

const InputContainer = styled.View`
  flex: 1;
`;

const Error = styled.Text<{ error: boolean }>`
  color: #ff0000c2;
  transform: translateY(-10px);
  width: 100%;
  left: 0;
  bottom: 0;
  padding-left: 15px;
  display: ${(props) => (props.error ? "flex" : "none")};
`;

interface LabeledProps {
  children: ReactNode;
  label: string;
  error?: string;
  onPress?: () => void;
}
export default function Labeled({
  children: input,
  label,
  error,
  onPress,
}: LabeledProps) {
  return (
    <Container error={error != null} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Label>{label}</Label>
        <InputContainer>{input}</InputContainer>
      </View>
      <Error error={error != null}>{error}</Error>
    </Container>
  );
}
