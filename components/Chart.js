import { Card } from "./Card";
import { Text } from "react-native";
import { View } from "react-native";

export function Chart() {
  return (
    <Card style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>$300</Text>
      <Text>Remaining Balance</Text>
      <View style = {{display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap"}}>
      <SpecificCategory name = "Food" color = "red" amount = "$20"/>
      <SpecificCategory name = "Rent" color = "blue" amount = "$10"/>
      <SpecificCategory name = "Environment" color = "green" amount = "$5"/>
      <SpecificCategory name = "Transporation" color = "purple" amount = "$16"/>
      </View>
    </Card>
  );
}

export function SpecificCategory({name, color, amount}) {
    return (
        <View style = {{display: "flex", flexDirection: "row", width: "50%"}}>
            <View style = {{width: 10, height: 10, borderRadius: 10, backgroundColor: color}}>
            </View>
            <Text>{name}</Text>
            <Text>{amount}</Text>
        </View>
    )
}