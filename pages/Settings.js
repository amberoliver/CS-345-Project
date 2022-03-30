import { View, Text } from "react-native";
import Card from "../components/Card";
import Transaction from "../components/Transaction";
import Button from "../components/Button";

const mockSettings = [
  {
    name: "Name",
    
  },
  {
    name: "Email",

  },
  {
    name: "Phone",

  },
];
export default function Settings() {
  return (
    <View>
      <Card margin noPad>
        {mockSettings.map((data, index) => (
          <Transaction {...data} key={index} />
        ))}
      </Card>
      <Button title="Get Help" onPress={() => console.log("button pressed")} />
      <Button title="Logout" onPress={() => console.log("button pressed")} />
      <Button title="Delete Account" onPress={() => console.log("button pressed")} />
    </View>
  );
}
