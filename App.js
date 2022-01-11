import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import State from "./src/screens/state";

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <State />
    </View>
  );
}