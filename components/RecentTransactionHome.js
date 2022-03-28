import { Card } from "./Card";
import { Text } from "react-native";
import { View } from "react-native";

export function RecentTransactionHome() {
    return (
    <Card style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <View style = {{display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap"}}>
        <TransactionData category = "Food" item = "French Fries" amount = "$3.45" date = "02/03/22" time = "3:22 PM"/>
        </View>
    </Card>
    );
}

export function TransactionData({category, item, amount, date, time}) {
    return(
        <View style = {{display: "flex", flexDirection: "row", width: "50%", justifyContent: "space-between"}}>
            <Text>{category}</Text>
            <Text>{amount}</Text>
            <Text>{item}</Text>
            <Text>{date}</Text>
            <Text>{time}</Text>
        </View>
    );
}