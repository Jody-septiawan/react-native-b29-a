import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Event from "./src/screens/event";

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <Event />
    </View>
  );
}