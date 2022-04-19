import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import Button from "../Button";
import CurrencyField from "./CurrencyField";
import DateField from "./DateField";
import SelectField from "./SelectField";
import TextField from "./TextField";

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
