import { Text, TouchableOpacity } from "react-native";
interface HeaderButtonProps {
  onPress: () => void;
  title: string;
}
export default function HeaderButton({ onPress, title }: HeaderButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
}
