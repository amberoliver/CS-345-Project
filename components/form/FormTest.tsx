import "react-native-gesture-handler";
import Root from "../../navigation/Root";
import { store } from "../../state/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useMemo, useRef } from "react";
import MyInput from "../Input";
import {
  ColorPropType,
  ColorSchemeName,
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from "react-native";
import {
  FormProvider,
  useForm,
  useController,
  ControllerProps,
  UseControllerProps,
} from "react-hook-form";
import styled, { css } from "@emotion/native";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CurrencyInput from "react-native-currency-input";
import CurrencyField from "./CurrencyField";
import Button from "../Button";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DateField from "./DateField";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    category: yup.string().required("Category selection Required.").nullable(),
    price: yup
      .number()
      .positive()
      .min(0.01, "Cost must be atleast 1cent")
      .nullable()
      .required(),
    date: yup.date().required("Date is required"),
  })
  .required();

interface TestForm {
  email: string;
  category: string | null;
  price: number | null;
  date: Date;
}

export default function FormTest() {
  const methods = useForm<TestForm>({
    defaultValues: {
      email: "martin@email.com",
      category: null,
      price: null,
      date: new Date(),
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: TestForm) => console.log(data);
  return (
    <SafeAreaView>
      <FormProvider {...methods}>
        <TextField
          name="email"
          label="Email"
          placeholder="email@email.com"
          keyboardType="email-address"
        />
        <SelectField
          name="category"
          placeholder="Select Category"
          label="Category"
          items={[{ label: "Rent", value: "rent" }]}
        />
        <CurrencyField label="Price" name="price" />
        <DateField name="date" label="Date" />
        <Button title={"Button"} onPress={handleSubmit(onSubmit)} />
      </FormProvider>
    </SafeAreaView>
  );
}
