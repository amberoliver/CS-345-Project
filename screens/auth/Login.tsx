import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { loginUser } from "../../api";
import Button from "../../components/Button";
import TextField from "../../components/form/TextField";
import KeyboardAvoidingScrollView from "../../components/KeyboardAvoidingScrollView";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { login } from "../../state/authSlice";
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
        />
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </FormProvider>
    </KeyboardAvoidingScrollView>
  );
}
