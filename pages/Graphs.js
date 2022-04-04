import { ScrollView } from "react-native-gesture-handler";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import Card from "../components/Card";
import { Text } from "react-native-svg";

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

const food = [
    {
      name: "Total",
      budget: 300,
      color: "#0000FF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Remaining",
      budget: 70,
      color: "#808080",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const rent = [
    {
      name: "Total",
      budget: 400,
      color: "#0000FF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Remaining",
      budget: 400,
      color: "#808080",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const entertainment = [
    {
      name: "Total",
      budget: 50,
      color: "#0000FF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Remaining",
      budget: 50,
      color: "#808080",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const Transportation = [
    {
      name: "Total",
      budget: 70,
      color: "#0000FF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Remaining",
      budget: 40,
      color: "#808080",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  export default function Graphs() {
      return (
          <ScrollView>
            <Graph></Graph>
            <Graph1></Graph1>
            <Graph2></Graph2>
            <Graph3></Graph3>
          </ScrollView>
      );
  }

export function Graph() {
    return (
      <Card>
        <Text>
          Food
        </Text>
    <PieChart 
      data={food}
      width={screenWidth}
      height={150}
      chartConfig={chartConfig}
      accessor={"budget"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[5, 5]}
      absolute
    />
</Card>
    );
}

export function Graph1() {
    return(
      <Card>
      <PieChart
        data = {rent}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor={"budget"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[5, 5]}
        absolute
        />
        </Card>
    );
}

export function Graph2() {
    return(
      <Card>
      <PieChart
        data = {entertainment}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor={"budget"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[5, 5]}
        absolute
        />
        </Card>
    );
}

export function Graph3() {
    return(
      <Card>
      <PieChart
        data = {Transportation}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor={"budget"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[5, 5]}
        absolute
        />
        </Card>
    );
}
