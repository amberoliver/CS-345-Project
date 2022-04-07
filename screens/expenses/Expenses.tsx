import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { ListRenderItemInfo, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import FAB from "../../components/FAB";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import useColor from "../../useColor";
import Expense, { ExpenseProps } from "./Expense";
type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList, "Expenses">
>;

export type ExpensesNav = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Expenses">,
  StackNavigationProp<RootStackParamList, "Tabs">
>;

export default function Expenses({ navigation }: Props) {
  const color = useColor();
  const expenses = useSelector((state: any) => state.expenses);
  const hasCategory = useSelector((state: any) => state.budget.length > 0);
  const show = "spent";
  if (hasCategory) {
    return (
      <>
        <FlatList
          data={expenses}
          renderItem={({ item }) => <Expense {...item} />}
          keyExtractor={(item) => item.id}
        />
        <FAB
          onPress={() => {
            navigation.navigate("ExpenseModal", { id: "" });
          }}
        />
      </>
    );
  } else {
    return <Text style={{ color: color.font }}>Please Create Your Budget</Text>;
  }
}
