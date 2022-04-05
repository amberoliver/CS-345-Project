import { ListRenderItemInfo, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FAB from "../../components/FAB";
import Category, { CategoryProps } from "./Category";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Root";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { TabParamList } from "../../navigation/Tabs";
type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList, "Budget">
>;

const budget: CategoryProps[] = [
  {
    total: 500,
    spent: 100,
    name: "Food",
    id: "238t9hfeonsd",
  },
  {
    total: 80,
    spent: 40,
    name: "Entertainment",
    id: "adfsafsdgrw",
  },
  {
    total: 230,
    spent: 200,
    name: "Transportation",
    id: "wbybtwreydf",
  },
  {
    total: 500,
    spent: 100,
    name: "Food",
    id: "n45hgdfj6",
  },
];
export default function BudgetScreen({ navigation }: Props) {
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
