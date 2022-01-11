import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import List from "./src/screens/list";
import FlatListComponents from "./src/screens/flatlist";

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <List />
      <FlatListComponents />
    </View>
  );
}