import { useMemo } from "react";
import { useColorScheme } from "react-native";

export default function useColor() {
  const scheme = useColorScheme();
  return useMemo(
    () =>
      ({
        dark: {
          card: "#101010",
          font: "white",
          border: "#1D1D20",
          accent: "#0B84FF",
        },
        light: {
          card: "white",
          font: "black",
          border: "#F3F3F3",
          accent: "#0B84FF",
        },
      }[scheme || "light"]),
    [scheme]
  );
}
