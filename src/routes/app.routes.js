import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../components/HomeCoord";
import Prontuario from "../components/Prontuario";
import CreateFisio from "../components/CreateFisio";
import PatientDetails from "../components/PatientDetails";
import Students from "../components/Students";
import StudentDetails from "../components/StudentDetails";
import Patient from "../components/Patient";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00005d",
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen name="Cadastrar Fisioterapeuta" component={CreateFisio} />
      <Drawer.Screen name="Gerenciar Alunos" component={Students} />
      {/* Detalhes do paciente e prontuario será uma stack navigation */}
      <Drawer.Screen name="Detalhes do Paciente" component={PatientDetails} />
      <Drawer.Screen name="Prontuario" component={Prontuario} />
      <Drawer.Screen name="Detalhes do estudante" component={StudentDetails} />
      <Drawer.Screen name="Pacientes" component={Patient} />
    </Drawer.Navigator>
  );
}
