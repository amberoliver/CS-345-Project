import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { loginUser, registerUser } from "../../api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { RootStackParamList } from "../../navigation/Root";
import { TabParamList } from "../../navigation/Tabs";
import { login } from "../../state/authSlice";
import { useAppDispatch } from "../../state/hooks";
import useColor from "../../useColor";
import KeyboardSpacer from 'react-native-keyboard-spacer';

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Register">,
  BottomTabScreenProps<TabParamList>
>;
export default function Register({ navigation }: Props) {
  const color = useColor();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [name, setName] = React.useState("");
  const dispatch = useAppDispatch();

  function handleRegister() {
    registerUser(name, phone, email, password).then((res) => {
      //console.log(JSON.stringify(res));
      loginUser(email, password).then((token) => {
        dispatch(login({ email, token, phone, name }));
        navigation.push("Tabs");
      });
    });
  }
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
          <Text
        style={{
          color: color.font,
          fontSize: 32,
          textAlign: "center",
          padding: 10,
        }}
      >
        Register Account For
      </Text>
      <Text
        style={{
          color: color.accent,
          fontSize: 42,
          textAlign: "center",
          padding: 10,
          paddingTop: 0,
        }}
      >
        Craving Savings
      </Text>

      <Input
        title="Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />
      <Input
        title="Email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        title="Phone"
        placeholder="2004254901"
        value={phone}
        onChangeText={setPhone}
      />
      <Input
        title="Password"
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Input
        title="Confirm"
        placeholder="confirm password"
        value={confirm}
        onChangeText={setConfirm}
      />
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
    <KeyboardSpacer/>
    </View>
  );
}
