import { Text } from "react-native";
import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Card } from "./Card";
import CategoryTag from "./CategoryTag";

import Svg, { Path } from "react-native-svg";
export function Chart({ categories }) {
  const total = categories.reduce((prev, curr) => {
    return prev + curr.total;
  }, 0);
  return (
    <Card margin>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Circle categories={categories} />
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 42, fontWeight: "bold" }}>${total}</Text>
          <Text style={{ width: 100, textAlign: "center" }}>
            Remaining for this month
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {categories.map((item, index) => (
          <CategoryTag {...item} key={index} />
        ))}
      </View>
    </Card>
  );
}

function Circle({ categories }) {
  function getVals() {
    let sum = 0;
    let result = [];
    const total = categories.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
    console.log(total);
    for (let cat of categories) {
      const { remaining, color } = cat;
      console.log(total);
      let percent = remaining / total;
      sum += percent;
      result.push({ percent: sum, color });
    }

    return [{ percent: 1, color: "#E7E7E7" }, ...result].sort(
      ({ percent: a }, { percent: b }) => b - a
    );
  }
  return (
    <View>
      <Svg
        width={220}
        height={207}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getVals().map(({ color, percent }, index) => (
          <Path
            d="M60.289 196.788a100.269 100.269 0 0 1-17.92-13.125 100.609 100.609 0 0 1-13.567-15.281 99.873 99.873 0 0 1-10.532-18.498 99.215 99.215 0 0 1-5.978-18.497A100.368 100.368 0 0 1 10 110c0-7.341.791-14.497 2.292-21.387a99.267 99.267 0 0 1 7.292-21.388 100.043 100.043 0 0 1 12.291-19.653 100.597 100.597 0 0 1 16.853-16.608 100.003 100.003 0 0 1 19.075-11.652 99.26 99.26 0 0 1 21.966-7.264A100.44 100.44 0 0 1 110 10c8.58 0 16.909 1.08 24.855 3.113a99.287 99.287 0 0 1 20.232 7.604 100.102 100.102 0 0 1 16.185 10.247 100.577 100.577 0 0 1 16.853 16.608 100.044 100.044 0 0 1 12.291 19.653 99.284 99.284 0 0 1 7.292 21.388A100.395 100.395 0 0 1 210 110c0 7.341-.791 14.497-2.292 21.387a99.317 99.317 0 0 1-5.978 18.497 99.937 99.937 0 0 1-10.532 18.498 100.643 100.643 0 0 1-15.88 17.341 100.25 100.25 0 0 1-15.607 11.065"
            stroke={color}
            key={index}
            strokeWidth={20}
            strokeLinecap="round"
            strokeDasharray={524.3544921875}
            strokeDashoffset={524.3544921875 - 524.3544921875 * percent}
          />
        ))}
      </Svg>
    </View>
  );
}
