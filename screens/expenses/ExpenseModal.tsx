import { Alert, Button, Text, View } from "react-native";
import Input from "../../components/Input";
import CurrencyInput from "react-native-currency-input";
import React, { useEffect } from "react";
import DateInput from "../../components/DateInput";
import { useDispatch, useSelector } from "react-redux";
import { create, remove, update } from "../../state/expensesSlice";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import moment from "moment";
import { addExpense } from "../../state/budgetSlice";
import Select from "../../components/Select";
import { useAppSelector } from "../../state/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { ExpenseType } from "../../state/expensesSlice";
import HeaderButton from "../../components/HeaderButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "native-base";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "ExpenseModal">,
  BottomTabScreenProps<TabParamList>
>;
export default function ExpenseModal({ navigation, route }: Props) {
  const { id } = route.params;
  const def: ExpenseType = {
    id: new Date().getTime() + "",
    category: "",
    name: "",
    cost: 0,
    date: new Date().getTime(),
  };
  const initial =
    useAppSelector((state) => state.expenses.find((e) => e.id == id)) || def;
  const [expense, setExpense] = React.useState(initial);
  const dispatch = useDispatch();
  const budget = useSelector((state: any) => state.budget);
  const [error, setError] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: id === "" ? "Add Expense" : "Edit Expense",
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.pop()} title="Cancel" />
      ),
      headerRight: () => (
        <HeaderButton onPress={() => handleSubmit()} title="Save" />
      ),
    });
  }, [navigation, expense]);

  function handleSubmit() {
    if (expense.cost <= 0 || expense.name == "" || expense.category == "") {
      setError(true);
      return;
    }
    if (id == "") {
      dispatch(create(expense));
      dispatch(addExpense(expense));
    } else {
      dispatch(update(expense));
      dispatch(addExpense({ ...expense, cost: expense.cost - initial.cost }));
    }

    navigation.pop();
  }
  function confirmDelete() {
    Alert.alert("Confirm Deletion", undefined, [
      { text: "Cancel" },
      { text: "Delete", style: "destructive", onPress: handleDelete },
    ]);
  }
  function handleDelete() {
    dispatch(addExpense({ ...expense, cost: -initial.cost }));
    dispatch(remove(expense));
    navigation.pop();
  }
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Input
        title="Name"
        placeholder="French Fries"
        onChangeText={(name: string) => setExpense({ ...expense, name })}
        value={expense.name}
      />
      <Select
        title="Category"
        value={expense.category}
        placeholder="Select Category"
        items={budget.map((cat: any) => ({
          label: cat.name,
          value: cat.name,
        }))}
        onValueChange={(category: string) =>
          setExpense({ ...expense, category })
        }
      />
      <Input
        title="Cost"
        inputComponent={CurrencyInput}
        value={expense.cost}
        onChangeValue={(cost: number) => setExpense({ ...expense, cost })}
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="$0.00"
      />
      <DateInput
        date={new Date(expense.date)}
        dateChange={(date: Date) =>
          setExpense({ ...expense, date: date.getTime() })
        }
      />
      {error && (
        <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
          Name, category, and cost are required.
        </Text>
      )}
      <View style={{ flex: 1 }}></View>
      {id !== "" && (
        <Button onPress={confirmDelete} title="Delete Expense" color="red" />
      )}
    </View>
  );
}
