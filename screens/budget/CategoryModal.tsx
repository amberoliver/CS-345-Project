import { Button, Text, View } from "react-native";
import Input from "../../components/Input";
import CurrencyInput from "react-native-currency-input";
import React from "react";
import { useDispatch } from "react-redux";
import { create } from "../../state/budgetSlice";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "BudgetModal">,
  BottomTabScreenProps<TabParamList>
>;
export default function EditCategory({ navigation }: Props) {
  const dispatch = useDispatch();
  const [amount, setCategoryAmount] = React.useState(0); // can also be null
  const [name, setCategoryName] = React.useState("");
  function handleSubmit() {
    dispatch(
      create({
        amount,
        name,
        id: new Date().getTime() + "",
      })
    );
    navigation.pop();
  }
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
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}
