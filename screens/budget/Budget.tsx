import SegmentedControl from "@react-native-segmented-control/segmented-control";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import FAB from "../../components/FAB";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import Category from "./Category";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList, "Budget">
>;

export type BudgetNav = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Expenses">,
  StackNavigationProp<RootStackParamList, "Tabs">
>;

export default function BudgetScreen({ navigation }: Props) {
  const budget = useSelector((state: any) => state.budget);
  const [showSpent, setShowSpent] = React.useState(true);
  return (
    <>
      <SegmentedControl
        values={["Spent", "Remaining"]}
        selectedIndex={showSpent ? 0 : 1}
        onChange={() => setShowSpent(!showSpent)}
      />
      <FlatList
        data={budget}
        renderItem={({ item }) => <Category {...item} showSpent={showSpent} />}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={() => {
          navigation.navigate("BudgetModal", { id: "" });
        }}
      />
    </>
  );
}
