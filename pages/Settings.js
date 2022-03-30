import { View, Text } from "react-native";
import Card from "../components/Card";
import Transaction from "../components/Transaction";
import Button from "../components/Button";

const nameTitle = "Name:";
const emailTitle = "Email:";
const phoneTitle = "Phone:";

export default function Settings({name, email, phone}) {
  return (
    <View>
      <Card>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{nameTitle}</Text>
      <Text style={{ fontSize: 25, flexDirection: "row", textAlign: "left" }}>
            {name}
          </Text>
          <View style = {{fontSize: 15, flexDirection: "row-reverse", display: "flex"}}>
          <Button title="Edit" onPress={() => console.log("button pressed")} />
          </View>
      </Card>
      <Card>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{emailTitle}</Text>
      <Text style={{ fontSize: 25, flexDirection: "row", textAlign: "left" }}>
            {email}
          </Text>
          <View style = {{fontSize: 15, flexDirection: "row-reverse", display: "flex"}}>
          <Button title="Edit" onPress={() => console.log("button pressed")} />
          </View>
      </Card>
      <Card>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{phoneTitle}</Text>
      <Text style={{ fontSize: 25, flexDirection: "row", textAlign: "left" }}>
            {phone}
          </Text>
          <View style = {{fontSize: 15, flexDirection: "row-reverse", display: "flex"}}>
          <Button title="Edit" onPress={() => console.log("button pressed")} />
          </View>
      </Card>
      <Button title="Get Help" onPress={() => console.log("button pressed")} />
      <Button title="Logout" onPress={() => console.log("button pressed")} />
      <Button title="Delete Account" onPress={() => console.log("button pressed")} />
    </View>
  );
}
