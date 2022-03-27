import { Card } from "./Card";
import { Text } from "react-native";
import { View } from "react-native";

export function Chart() {
  return (
    <Card style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>$300</Text>
      <Text>Remaining Balance</Text>
      <View style = {{display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap"}}>
      <SpecificCategory name = "Food" color = "red"/>
      <SpecificCategory name = "Rent" color = "blue"/>
      <SpecificCategory name = "Environment" color = "green"/>
      <SpecificCategory name = "Transporation" color = "purple"/>
      </View>
    </Card>
  );
}

export function SpecificCategory({name, color}) {
    return (
        <View style = {{display: "flex", flexDirection: "row", width: "50%"}}>
            <View style = {{width: 10, height: 10, borderRadius: 10, backgroundColor: color}}>
            </View>
            <Text>{name}</Text>
        </View>
    )
}