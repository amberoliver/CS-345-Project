import { Alert, Button, Text, View } from "react-native";
import Input from "../../components/Input";
import CurrencyInput from "react-native-currency-input";
import React from "react";
import { useDispatch } from "react-redux";
import { Category, create, remove, update } from "../../state/budgetSlice";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { useAppSelector } from "../../state/hooks";
import HeaderButton from "../../components/HeaderButton";
type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "BudgetModal">,
  BottomTabScreenProps<TabParamList>
>;
export default function EditCategory({ navigation, route }: Props) {
  const { id } = route.params;
  const dispatch = useDispatch();
  const defaultCategory: Category = {
    id: new Date().getTime() + "",
    name: "",
    amount: 0,
    spent: 0,
  };
  const category = useAppSelector(
    (state) =>
      state.budget.find((category) => category.id == id) || defaultCategory
  );

  const [amount, setCategoryAmount] = React.useState(category.amount); // can also be null
  const [name, setCategoryName] = React.useState(category.name);
  function handleSubmit() {
    if (id == "") {
      dispatch(
        create({
          amount,
          name,
          id: new Date().getTime() + "",
          spent: 0,
        })
      );
    } else {
      dispatch(update({ amount, name, id, spent: category.spent }));
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
    dispatch(remove({ amount, name, id, spent: category.spent }));
    navigation.pop();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: id === "" ? "Add Category" : "Edit Category",
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.pop()} title="Cancel" />
      ),
      headerRight: () => (
        <HeaderButton onPress={() => handleSubmit()} title="Save" />
      ),
    });
  }, [navigation, amount, name]);

  return (
    <View>
      <Input
        title="Name"
        placeholder="Rent"
        onChangeText={setCategoryName}
        value={name}
      />
      <Input
        title="Amount"
        inputComponent={CurrencyInput}
        value={amount}
        onChangeValue={setCategoryAmount}
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="$0.00"
      />
      {id !== "" && (
        <Button onPress={confirmDelete} title="Delete Category" color="red" />
      )}
    </View>
  );
}
