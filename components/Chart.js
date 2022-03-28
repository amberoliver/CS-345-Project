import { Card } from "./Card";
import { Text } from "react-native";
import { View } from "react-native";

export function Chart() {
  return (
    <Card style = {{backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center", width: "300px", height: "150px" }}>
      <Text>$300</Text>
      <Text>Remaining Balance</Text>
      <View style = {{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyConten: "flex-start"}}>
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "blue", }}>
        <SpecificCategory name = "Food" color = "#6B7AFF" amount = "$20  "/>
        <SpecificCategory name = "Rent" color = "#FF6BF0" amount = "$10"/>
      </View>
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "blue", }}>
        <SpecificCategory name = "Entertainment" color = "#6BFF8C" amount = "$5"/>
        <SpecificCategory name = "Transporation" color = "#FF6B6B" amount = "$16"/>
      </View>
      </View>
    </Card>
  );
}

export function SpecificCategory({name, color, amount}) {
    return (
        <View style = {{display: "flex", flexDirection: "row", width: "100%", height: "50%", justifyContent: "flex-start"}}>
            <View style = {{width: 10, height: 10, borderRadius: 10, backgroundColor: color}}>
            </View>
            <Text>{name}</Text>
            <Text>{amount}</Text>
        </View>
    );
}