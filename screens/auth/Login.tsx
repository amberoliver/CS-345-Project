import { Center, View } from "native-base";
import React from "react";
import { ScrollView, Text } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useColor from "../../useColor";

export default function Login() {
  const color = useColor();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
        Login To
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
        title="Email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={setEmail}
      />
      <Input
        title="Password"
        placeholder="password"
        value={password}
        onChange={setPassword}
      />
      <Button title="Login" onPress={() => console.log("Login")} />
    </ScrollView>
    <KeyboardSpacer/>
    </View>
  );
}
