import { View, Text, TextInput } from "react-native";
import Card from "../components/Card";
import Transaction from "../components/Transaction";
import Button from "../components/Button";

const nameTitle = "Name:";
const emailTitle = "Email:";
const phoneTitle = "Phone:";

export default function Settings() {
  const name = "Amber";
  const email = "amberoliver@gmail.com";
  const phone = "(252) 355-9323";
  return (
    <View>
      <Setting title="Name:" value="Amber"/>
      <Setting title="Email:" value="amber@gmail.com"/>
      <Setting title="Phone Number:" value="808681"/>
      <Button title="Get Help" onPress={() => console.log("button pressed")} />
      <Button title="Logout" onPress={() => console.log("button pressed")} />
      <Button
        title="Delete Account"
        onPress={() => console.log("button pressed")}
      />
    </View>
  );
}

function Setting({title, value}) {
  return (
    <Card>
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
    <TextInput style={{ fontSize: 25, flexDirection: "row", textAlign: "left" }} defaultValue = {value}>
    </TextInput>
  </Card>
  );
}
