import { ScrollView } from "react-native-gesture-handler";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, FlatList, View } from "react-native";
import Card from "../components/Card";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const screenWidth = Dimensions.get("window").width;

export default function Graphs() {
  const budget = useSelector((state) => state.budget);
  return (
      <FlatList
        data={budget}
        renderItem={({ item }) => <Graph {...item} />}
        keyExtractor={(item) => item.id}
      />
  );
}

function Graph({amount, spent, name}) {
    return (
      <Card margin>
        <Text style ={{fontWeight: "bold", textAlign: "center", fontSize: 20}}>
          {name}
        </Text>
        <View style = {{transform: [{translateX: -50}]}}>
    <PieChart 
      data={[{
        name: "Spent",
        budget: spent,
        color: "#0000FF",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Remaining",
        budget: amount - spent,
        color: "#808080",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }]}
      width={screenWidth}
      height={150}
      chartConfig={chartConfig}
      accessor={"budget"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[5, 5]}
      absolute
    />
    </View>
</Card>
    );
}
