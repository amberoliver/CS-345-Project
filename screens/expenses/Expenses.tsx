import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { ListRenderItemInfo, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import FAB from "../../components/FAB";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import Category, { CategoryProps } from "../budget/Category";
import Expense, { ExpenseProps } from "./Expense";
type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList, "Expenses">
>;

export default function Expenses({ navigation }: Props) {
  const expenses = useSelector((state) => state.expenses);
  const show = "spent";
  return (
    <>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <Expense {...item} />}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={() => {
          navigation.navigate("ExpenseModal");
        }}
      />
    </>
  );
}
