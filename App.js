import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import EmbedExpression from "./src/screens/embedExpression";

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <EmbedExpression />
    </View>
  );
}