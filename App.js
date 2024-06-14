import "react-native-gesture-handler";
import AppRoutes from "./src/routes/app.routes";
import Prontuario from "./src/components/Prontuario";
import CreateFisio from "./src/components/CreateFisio";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/components/HomeCoord";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
