import { Card } from "./Card";
import { Text } from "react-native";
import { View } from "react-native";

export function RecentTransactionHome() {
    return (
    <Card style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <View style = {{display: "flex", flexDirection: "row", width: 200, flexWrap: "wrap"}}>
        <TransactionData category = "Food" item = "French Fries" amount = "$300" date = "02/03/22" time = "3:22 PM"/>
        </View>
    </Card>
    );
}

export function TransactionData(category, item, amount, date, time) {
    return(
        <View style = {{display: "flex", flexDirection: "row", width: "50%"}}>
            <Text>{category}</Text>
            <Text>{item}</Text>
            <Text>{amount}</Text>
            <Text>{date}</Text>
            <Text>{time}</Text>
        </View>
    );
}