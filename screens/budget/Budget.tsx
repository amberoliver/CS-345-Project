import { FlatList } from "react-native-gesture-handler";
import FAB from "../../components/FAB";
import Category, { CategoryProps } from "./Category";
import { RootStackParamList } from "../../navigation/Root";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { TabParamList } from "../../navigation/Tabs";
import { useSelector } from "react-redux";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList, "Budget">
>;

export default function BudgetScreen({ navigation }: Props) {
  const budget = useSelector((state) => state.budget);
  const show = "spent";
  return (
    <>
      <FlatList
        data={budget}
        renderItem={({ item }) => <Category {...item} show={show} />}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={() => {
          navigation.navigate("BudgetModal");
        }}
      />
    </>
  );
}
