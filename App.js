import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Header from "./src/components/header";
import Content from "./src/components/content"

export default function App() {
  return (
    <View style={{marginTop: 50}}>
      <StatusBar />
      <Header />
      <Content />
    </View>
  );
}