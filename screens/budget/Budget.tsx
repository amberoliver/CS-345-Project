import { useTheme } from "@emotion/react";
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
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FAB from "../../components/FAB";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { useAppSelector } from "../../state/hooks";
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
  const theme = useTheme();
  const budget = useAppSelector((state) => state.budget);
  const total = budget.reduce(
    (prev, curr) => ({
      spent: prev.spent + curr.spent,
      amount: curr.amount || 0 + prev.amount,
      name: prev.name,
    }),
    {
      spent: 0,
      amount: 0,
      name: "Total",
    }
  );
  const [showSpent, setShowSpent] = React.useState(true);
  return (
    <>
      <View
        style={{
          shadowRadius: 10,
          shadowOpacity: 0.15,
          backgroundColor: theme.color.card,
          zIndex: 1000,
        }}
      >
        <SegmentedControl
          values={["Spent", "Remaining"]}
          selectedIndex={showSpent ? 0 : 1}
          onChange={() => setShowSpent(!showSpent)}
        />
        <Category {...total} showSpent={showSpent} />
      </View>
      <FlatList
        style={{ paddingTop: 15 }}
        data={budget}
        renderItem={({ item }) => (
          <Category
            {...item}
            amount={item.amount || 0}
            showSpent={showSpent}
            onPress={() => navigation.push("BudgetModal", { id: item.id })}
          />
        )}
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
