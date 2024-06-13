import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.viewAzul}>
      <View style={styles.viewTopo}>
        <TouchableOpacity style={styles.botaoOpcao}>
          <Image source={require('../../assets/Logo_iesgo.png')} style={styles.opcaoImage} />
        </TouchableOpacity>
        <Text style={styles.textoHome}>Olá, Coordenador</Text>
        <Image source={require('../../assets/Logo_iesgo.png')} style={styles.logoIesgo} />
        <Text style={styles.textoFisio}>Fisioterapia</Text>
      </View>
      
      <View style={styles.viewBranco}>
        <Text style={styles.textoHomeBranco}>O que você precisa hoje?</Text>
        
        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../assets/Calendar2.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Todos os Agendamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../assets/add-user-friends-svgrepo-com.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Cadastrar Fisioterapeuta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../assets/settings-svgrepo-com.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Gerenciar Alunos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../assets/whatsapp-svgrepo-com.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Suporte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../assets/report-svgrepo-com.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Relatorio dos pacientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../assets/tasks-badged-svgrepo-com.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Ficha de evolução</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewAzul: {
    flex: 1,
    backgroundColor: "#00005D",
  },
  viewTopo: {
    width: "100%",
    height: "45%",
    backgroundColor: "#00005D",
    justifyContent: "center",
    alignItems: "center",
  },
  viewBranco: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -30,
  },
  viewBotao: {
    flex: 1,
    height: 400,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 3,
    margin: 10,
  },
  opcaoImage: {
    width: 35,
    height: 35,
  },
  logoIesgo: {
    width: 280,
    height: 108,
    tintColor: "#FFFFFF",
    marginTop: 60,
  },
  imagemBotao: {
    width: 50,
    height: 50,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 12,
  },
  textoHome: {
    position: "absolute",
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 20,
    left: 15,
    top: 90,
  },
  textoHomeBranco: {
    fontSize: 20,
    color: "#000000",
  },
  textoFisio: {
    fontSize: 36,
    color: "#FFFFFF",
    textAlign: "center",
    marginLeft: 10,
  },
  botaoServico: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    borderColor: "#ccc",
  },
  botaoOpcao: {
    position: "absolute",
    top: 60,
    left: 15,
  },
});