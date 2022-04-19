import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import ConfirmButton from "../../components/ConfirmButton";
import CurrencyField from "../../components/form/CurrencyField";
import TextField from "../../components/form/TextField";
import HeaderButton from "../../components/HeaderButton";
import KeyboardAvoidingScrollView from "../../components/KeyboardAvoidingScrollView";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import {
  Category,
  create,
  remove,
  selectCategory,
  update,
} from "../../state/budgetSlice";
import { useAppSelector } from "../../state/hooks";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "BudgetModal">,
  BottomTabScreenProps<TabParamList>
>;

const schema = yup
  .object({
    name: yup.string().required(),
    amount: yup
      .number()
      .min(1, "Amount must be atleast $1")
      .required("Amount is required.")
      .nullable(),
  })
  .required();

export default function EditCategory({ navigation, route }: Props) {
  const { id } = route.params;
  const dispatch = useDispatch();

  const methods = useForm<Category>({
    resolver: yupResolver(schema),
    defaultValues: useAppSelector(selectCategory(id)),
  });
  const { handleSubmit } = methods;

  function onSubmit(data: Category) {
    if (id == "") dispatch(create(data));
    else dispatch(update(data));
    navigation.pop();
  }

  function handleDelete() {
    dispatch(remove(id));
    navigation.pop();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: id === "" ? "Add Category" : "Edit Category",
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
        <TextField name="name" label="Name" placeholder="Food" />
        <CurrencyField name="amount" label="Amount" />
        <ConfirmButton title="Delete" onPress={handleDelete} />
      </FormProvider>
    </KeyboardAvoidingScrollView>
  );
}
