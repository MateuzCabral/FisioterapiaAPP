import { View } from "react-native";
import Prontuario from "./components/Prontuario";
import { StatusBar } from "expo-status-bar";
import CreateFisio from "./components/CreateFisio";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <CreateFisio />
    </View>
  );
}
