import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import axios from "axios";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Alert } from "react-native";
import * as yup from "yup";
import Button from "../../components/Button";
import TextField from "../../components/form/TextField";
import KeyboardAvoidingScrollView from "../../components/KeyboardAvoidingScrollView";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { login } from "../../state/authSlice";
import { setBudget } from "../../state/budgetSlice";
import { setExpenses } from "../../state/expensesSlice";
import { useAppDispatch } from "../../state/hooks";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Register">,
  BottomTabScreenProps<TabParamList>
>;

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup.string().required("Please enter your password"),
  })
  .required();

interface TestForm {
  email: string;
  password: string;
}

export default function Register({ navigation }: Props) {
  const methods = useForm<TestForm>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const { handleSubmit } = methods;
  const onSubmit = (form: TestForm) => {
    const { email, password } = form;
    axios
      .post("https://cs-backend.herokuapp.com/login", {
        email,
        password,
      })
      .then(({ data: { success, message, res } }) => {
        console.log({ success, message, res });
        if (success) {
          axios
            .get("https://cs-backend.herokuapp.com/data", {
              headers: { "auth-token": res.token },
            })
            .then(({ data }) => {
              console.log(data);
              const { budget, expenses }: any = JSON.parse(data.data);
              dispatch(login({ token: res.token, ...data }));
              dispatch(setBudget(budget));
              dispatch(setExpenses(expenses));
              navigation.push("Tabs");
            });
        } else {
          Alert.alert(message);
        }
      });
  };

  return (
    <KeyboardAvoidingScrollView>
      <FormProvider {...methods}>
        <TextField
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextField
          name="password"
          label="Password"
          placeholder="••••••"
          autoCapitalize="none"
          secureTextEntry
          onLast={handleSubmit(onSubmit)}
        />
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </FormProvider>
    </KeyboardAvoidingScrollView>
  );
}
