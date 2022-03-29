import { View } from "react-native";
export function Layout({ gap, pad, spaces, children }) {
  return (
    <View style={{ padding: pad }}>
      {children.map((child) => (
        <View style={{ width: child.use / spaces + "%", padding: gap }}>
          {child}
        </View>
      ))}
    </View>
  );
}

export function Item({ children }) {
  return <View>{children}</View>;
}
