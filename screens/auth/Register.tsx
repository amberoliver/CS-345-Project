import { Center, View } from "native-base";
import React from "react";
import { Text } from "react-native";
import { registerUser } from "../../api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useColor from "../../useColor";

export default function Register() {
  const color = useColor();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [name, setName] = React.useState("");

  function handleRegister() {
    registerUser(name, phone, email, password).then((res) =>
      console.log(JSON.stringify(res))
    );
  }
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
}
