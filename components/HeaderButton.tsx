import { Text, TouchableOpacity } from "react-native";
import useColor from "../useColor";
interface HeaderButtonProps {
  onPress: () => void;
  title: string;
}
export default function HeaderButton({ onPress, title }: HeaderButtonProps) {
  const color = useColor();
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      <Text style={{ color: color.accent, fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
