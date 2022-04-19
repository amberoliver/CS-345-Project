import { Alert, Button, ButtonProps } from "react-native";

interface Props extends ButtonProps {}

export default function ConfirmButton({ onPress, title, ...rest }: Props) {
  function handlePress(e: any) {
    Alert.alert(`Confirm ${title}`, undefined, [
      { text: "Cancel" },
      { text: title, style: "destructive", onPress: () => onPress(e) },
    ]);
  }
  return <Button onPress={handlePress} title={title} {...rest} />;
}
