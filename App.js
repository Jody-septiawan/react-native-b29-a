import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Props from "./src/screens/props";

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <Props />
    </View>
  );
}