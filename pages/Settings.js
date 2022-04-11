import { View, Text, TextInput } from "react-native";
import Card from "../components/Card";
import Transaction from "../components/Transaction";
import Button from "../components/Button";
import useColor from "../useColor";
import { useEffect, useState } from "react";

import { validate as isValidEmail } from "email-validator";

export default function Settings() {
  function validateEmail(email) {
    if (!isValidEmail(email)) {
      return "Email entered is not valid."; //return string with message if error
    } else {
      return null; //return null if no error
    }
  }

  function validatePhone(phone) {
    //phone will be a string
    //implement this
    return null;
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
  const [prev, setPrev] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    if (validate) {
      setError(validate(value) || null);
    } else {
      setPrev(value);
    }
  }, [value]);

  function handleBlur() {
    if (error) {
      setValue(prev);
      setError(null);
    }
  }
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
        onBlur={handleBlur}
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
