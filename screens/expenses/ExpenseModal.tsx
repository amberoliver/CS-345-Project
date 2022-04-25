import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import ConfirmButton from "../../components/ConfirmButton";
import CurrencyField from "../../components/form/CurrencyField";
import DateField from "../../components/form/DateField";
import SelectField from "../../components/form/SelectField";
import TextField from "../../components/form/TextField";
import HeaderButton from "../../components/HeaderButton";
import KeyboardAvoidingScrollView from "../../components/KeyboardAvoidingScrollView";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { addExpense } from "../../state/budgetSlice";
import {
  create,
  ExpenseType,
  remove,
  selectExpense,
  update,
} from "../../state/expensesSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "BudgetModal">,
  BottomTabScreenProps<TabParamList>
>;

const schema = yup
  .object({
    name: yup.string().required(),
    cost: yup
      .number()
      .min(0.01, "Cost must be atleast 1 cent")
      .required("Amount is required.")
      .nullable(),
    category: yup.string().nullable().required(),
    date: yup.number().required(),
  })
  .required();

export default function EditExpense({ navigation, route }: Props) {
  const { id } = route.params;
  const dispatch = useAppDispatch();

  const defaults = useAppSelector(selectExpense(id));
  const methods = useForm<ExpenseType>({
    resolver: yupResolver(schema),
    defaultValues: defaults,
  });

  const { handleSubmit, watch } = methods;

  function onSubmit(data: ExpenseType) {
    console.log("Made it");
    if (id == "") dispatch(create(data));
    else dispatch(update(data));

    dispatch(
      addExpense({
        cost: (data.cost || 0) - (defaults.cost || 0),
        category: data.category,
      })
    );
    navigation.pop();
  }

  function handleDelete() {
    dispatch(remove(id));
    dispatch(
      addExpense({
        cost: -(defaults.cost || 0),
        category: defaults.category,
      })
    );
    navigation.pop();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: id === "" ? "Add Expense" : "Edit Expense",
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.pop()} title="Cancel" />
      ),
      headerRight: () => (
        <HeaderButton onPress={handleSubmit(onSubmit)} title="Save" />
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingScrollView>
      <FormProvider {...methods}>
        <TextField name="name" label="Name" placeholder="French Fries" />
        <CurrencyField name="cost" label="Cost" />
        <SelectField
          name="category"
          label="Category"
          placeholder="Select A Category"
          items={useAppSelector((state) => state.budget).map(
            ({ id, name }) => ({ value: name, label: name })
          )}
        />
        <DateField name="date" label="Date" />
        <ConfirmButton title="Delete" onPress={handleDelete} />
      </FormProvider>
    </KeyboardAvoidingScrollView>
  );
}
