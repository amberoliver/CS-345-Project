import { FlatList } from "react-native-gesture-handler";
import FAB from "../../components/FAB";
import Category, { CategoryProps } from "./Category";
import { RootStackParamList } from "../../navigation/Root";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { TabParamList } from "../../navigation/Tabs";
import { useSelector } from "react-redux";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import React from "react";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Tabs">,
  BottomTabScreenProps<TabParamList, "Budget">
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
          navigation.navigate("BudgetModal");
        }}
      />
    </>
  );
}
