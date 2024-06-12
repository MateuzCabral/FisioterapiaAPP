import { View } from "react-native";
import Prontuario from "./components/Prontuario";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Prontuario />
    </View>
  );
}
