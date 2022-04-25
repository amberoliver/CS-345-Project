import { ReactNode } from "react";
import { Platform, ScrollView, View } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";

interface Props {
  children: ReactNode;
}

export default function KeyboardAvoidingScrollView({ children }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
      {Platform.OS == "ios" && <KeyboardSpacer />}
    </View>
  );
}
