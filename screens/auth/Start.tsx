import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import useColor from "../../useColor";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList>
>;

export default function Start({ navigation }: Props) {
  const color = useColor();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Login" onPress={() => navigation.push("Login")} />
      <Button title="Register" onPress={() => navigation.push("Register")} />
    </View>
  );
}
