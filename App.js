import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Form from "./src/screens/form";

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <Form />
    </View>
  );
}