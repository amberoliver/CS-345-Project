import { Button, Text, View } from "react-native";
import Input from "../../components/Input";
import CurrencyInput from "react-native-currency-input";
import React from "react";
import DateInput from "../../components/DateInput";
import { useDispatch } from "react-redux";
import { create } from "../../state/expensesSlice";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import moment from "moment";
import { addExpense } from "../../state/budgetSlice";
type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "ExpenseModal">,
  BottomTabScreenProps<TabParamList>
>;
export default function ExpenseModal({ navigation }: Props) {
  const dispatch = useDispatch();
  const [cost, setCost] = React.useState(null); // can also be null
  const [date, setDate] = React.useState(new Date());
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [error, setError] = React.useState(false);
  function handleSubmit() {
    if (cost == null || cost <= 0 || name == "" || category == "") {
      setError(true);
      return;
    }
    dispatch(
      create({
        date: moment(date).format("MMMM Do YYYY, h:mm a"),
        cost,
        name,
        categoryName: category,
        id: new Date().getTime() + "",
      })
    );
    dispatch(
      addExpense({
        cost,
        category,
      })
    );
    navigation.pop();
  }
  return (
    <View>
      <Input
        title="Name"
        placeholder="French Fries"
        onChangeText={setName}
        value={name}
      />
      <Input
        title="Category"
        placeholder="Food"
        onChangeText={setCategory}
        value={category}
      />
      <Input
        title="Cost"
        inputComponent={CurrencyInput}
        value={cost}
        onChangeValue={setCost}
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="$0.00"
      />
      <DateInput date={date} dateChange={setDate} />
      {error && (
        <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
          Name, category, and cost are required.
        </Text>
      )}
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}
