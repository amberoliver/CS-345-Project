import { validate as isValidEmail } from "email-validator";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import useColor from "../useColor";

export default function Settings() {
  function validateEmail(email) {
    if (!isValidEmail(email)) {
      return "Email entered is not valid."; //return string with message if error
    } else {
      return null; //return null if no error
    }
  }

  function validatePhone(phone) {
    if (phone.length != 10) {
      return "Phone number is not valid.";
    } else {
      return null;
    }
  }

  return (
    <View>
      <Setting title="Name:" placeholder="John Doe" />
      <Setting
        title="Email:"
        placeholder="johndoe@gmail.com"
        validate={validateEmail}
        autoCapitalize={"none"}
        keyboardType="email-address"
      />
      <Setting
        title="Phone Number:"
        placeholder="2004254901"
        validate={validatePhone}
        keyboardType="number-pad"
      />
      <Button title="Get Help" onPress={() => console.log("button pressed")} />
      <Button title="Logout" onPress={() => console.log("button pressed")} />
      <Button
        title="Delete Account"
        onPress={() => console.log("button pressed")}
      />
    </View>
  );
}

function Setting({ title, placeholder, validate, ...rest }) {
  const color = useColor();
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    if (validate) {
      setError(validate(value) || null);
    }
  }, [value]);

  return (
    <Card>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: color.font }}>
        {title}
      </Text>
      <TextInput
        {...rest}
        style={{
          fontSize: 25,
          flexDirection: "row",
          textAlign: "left",
          color: color.font,
        }}
        returnKeyType="done"
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
      ></TextInput>
      <Text style={{ color: "red", display: error == null ? "none" : "flex" }}>
        {error}
      </Text>
    </Card>
  );
}
