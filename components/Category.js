import { Card } from "./Card";
import { Text } from "react-native";
import { View } from "react-native";

export function Category() {
  return (
    <><Card style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      <View style={{ display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap", justifyConten: "space-between" }}>
        <SpecificCategory name="Food" color="#6B7AFF" amount="$300" />
      </View>
    </Card><Card style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      <View style={{ display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap", justifyConten: "space-between" }}>
        <SpecificCategory name="Entertainment" color="#6BFF8C" amount="$80" />
      </View>
    </Card><Card style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <View style={{ display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap", justifyConten: "space-between" }}>
          <SpecificCategory name="Rent" color="#FF6BF0" amount="$100" />
        </View>
    </Card><Card style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <View style={{ display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap", justifyConten: "space-between" }}>
          <SpecificCategory name="Transporation" color="#FF6B6B" amount="$80" />
        </View>
    </Card><Card style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <View style={{ display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap", justifyConten: "space-between" }}>
          <SpecificCategory name="Anything" color="#2200F3" amount="$10" />
        </View>
    </Card><Card style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <View style={{ display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap", justifyConten: "space-between" }}>
          <SpecificCategory name="New Category" color="#EFF1F5" amount="+" />
        </View>
    </Card></>
  );
}

  export function SpecificCategory({name, color, amount}) {
    return (
        <View style = {{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
            <View style = {{width: 10, height: 50, borderRadius: 10, backgroundColor: color}}>
            </View>
            <Text>{name}</Text>
            <Text>{amount}</Text>
        </View>
    );
}
