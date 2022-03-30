import { View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

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

const data = [
    {
      name: "Food",
      budget: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Rent",
      budget: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Entertainment",
      budget: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Transportation",
      budget: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

export default function Graph() {
    return (
<View>
    <PieChart
  data={data}
  width={screenWidth}
  height={200}
  chartConfig={chartConfig}
  accessor={"budget"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 10]}
  absolute
/>
</View>
    );
}