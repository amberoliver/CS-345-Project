import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { loginUser, registerUser } from "../../api";
import Input from "../../components/Input";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { login } from "../../state/authSlice";
import { useAppDispatch } from "../../state/hooks";
import useColor from "../../useColor";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { validate as isValidEmail } from "email-validator";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Register">,
  BottomTabScreenProps<TabParamList>
>;

import TextField from "../../components/form/TextField";
import SelectField from "../../components/form/SelectField";
import CurrencyInput from "react-native-currency-input";
import CurrencyField from "../../components/form/CurrencyField";
import Button from "../../components/Button";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DateField from "../../components/form/DateField";
import { FormProvider, useForm } from "react-hook-form";

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
  const onSubmit = (data: TestForm) => {
    console.log(data);
    const { email, password } = data;
    console.log("1");
    loginUser(email, password).then((token) => {
      console.log("2");
      dispatch(login({ email, token }));
      navigation.push("Tabs");
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
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
          />

          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </FormProvider>
      </ScrollView>
      <KeyboardSpacer />
    </View>
  );
}
