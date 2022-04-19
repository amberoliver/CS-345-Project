import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { loginUser, registerUser } from "../../api";
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
    name: yup.string().required(),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .when("password", {
        is: (password: any) => (password && password.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Password doesn't match"),
      }),
  })
  .required();

interface TestForm {
  email: string;
  name: string;
  phone: string;
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
    const { name, phone, email, password } = data;
    registerUser(name, phone, email, password).then((res) => {
      //console.log(JSON.stringify(res));
      loginUser(email, password).then((token) => {
        console.log(token);
        dispatch(login({ email, token, phone, name }));
        navigation.push("Tabs");
      });
    });
  };

  return (
    <KeyboardAvoidingScrollView>
      <FormProvider {...methods}>
        <TextField name="name" label="Full Name" placeholder="John Doe" />
        <TextField
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextField name="phone" label="Phone #" placeholder="5849489985" />
        <TextField
          name="password"
          label="Password"
          placeholder="••••••"
          autoCapitalize="none"
          secureTextEntry
        />
        <TextField
          name="confirmPassword"
          autoCapitalize="none"
          label="Confirm Pass."
          placeholder="•••••••"
          secureTextEntry
          onLast={handleSubmit(onSubmit)}
          onLastText="Register"
        />
        <Button title="Register" onPress={handleSubmit(onSubmit)} />
      </FormProvider>
    </KeyboardAvoidingScrollView>
  );
}
