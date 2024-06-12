import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";

const Prontuario = () => {
  return (
    <ScrollView style={styles.input}>
      <Text style={styles.header}>Prontuario do paciente</Text>

      <View style={styles.section}>
        <TextInput style={styles.input} placeholder="Unidade:" />

        <TextInput style={styles.input} placeholder="Setor de Atendimento:" />

        <TextInput style={styles.input} placeholder="Data: 00/00/0000" />
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>
          1 - Identificação do paciente/Dados pessoais
        </Text>
        {[
          "Nome",
          "Data de Nascimento",
          "Sexo",
          "Endereço",
          "Estado Civil",
          "Profissão",
          "Telefone",
          "Responsavel",
          "Em caso de emergência avisar",
          "Telefone de emeregência",
          "Diagnostico Clinico",
          "Diagnostico Fisioterapeutico",
          "Medico Responsavel",
        ].map((field) => (
          <React.Fragment key={field}>
            <TextInput style={styles.input} placeholder={field} />
          </React.Fragment>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>2 - Anamnese</Text>
        {["Queixa Principal", "HMA", "HMP", "AVD"].map((field) => (
          <React.Fragment key={field}>
            <TextInput style={styles.input} placeholder={field} />
          </React.Fragment>
        ))}

        <Text style={styles.label}>Realizou Cirurgias?</Text>
        <View style={{
          display: 'flex',
          flex: 1,
          }}>
          <CheckBox title='S' style={{
            backgroundColor: '#00005d',
            color: '#fff',
            fontWeight: 'bold'
            }}/>

          <CheckBox title='N' style={{
            backgroundColor: '#00005d',
            color: '#fff',
            fontWeight: 'bold'
          }}/>

        </View>

        <Text style={styles.label}>Quais:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Resultado de exames realizados:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Doenças Concomitantes?</Text>
        <Text>DM:</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="N" value="N" />
          <Picker.Item label="S" value="S" />
        </Picker>
        <Text>HAS:</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="N" value="N" />
          <Picker.Item label="S" value="S" />
        </Picker>
        <TextInput style={styles.input} placeholder="Outros"></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>3 - Antecedentes Familiares</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>4 - Patologias Associadas</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>5 - Antropometria</Text>
        <TextInput style={styles.input} placeholder="Peso:"></TextInput>
        <TextInput style={styles.input} placeholder="Altura:"></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>6 - Estado Geral</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>7 - Independencia de Locomoção</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>8 - Exames Fisicos</Text>
        <Text>Dados Vitais</Text>
        <TextInput style={styles.input} placeholder="PA"></TextInput>
        <TextInput style={styles.input} placeholder="FC"></TextInput>
        <TextInput style={styles.input} placeholder="FR"></TextInput>
        <TextInput style={styles.input} placeholder="AP"></TextInput>
        <TextInput style={styles.input} placeholder="SpO2"></TextInput>
        <TextInput style={styles.input} placeholder="Temp"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Exames Especificos"
        ></TextInput>

        <Text>Tonus Muscular</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="Normal" value="Alterado" />
          <Picker.Item label="Alterado" value="Normal" />
        </Picker>
        <TextInput style={styles.input} placeholder="Tipo"></TextInput>
        <TextInput style={styles.input} placeholder="Grau"></TextInput>
        <TextInput style={styles.input} placeholder="Local"></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Distribuição topografica:"
        ></TextInput>
        <TextInput style={styles.input} placeholder="Percepção:"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Coordenação Dinamica e Estatica:"
        ></TextInput>

        <Text>Reflexos Profundos</Text>
        <Text>Triciptal</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <Text>Bicipital</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <Text>Radial</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <Text>Patelar</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <Text>Calcanear</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>

        <Text>Reflexos Superficiais</Text>
        <Text>Cutaneo Abdominal</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <Text>Cutaneo Plantar</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>

        <Text>Contraturas e deformidades</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>

        <Text>Ulceras</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <TextInput style={styles.input} placeholder="Local"></TextInput>

        <Text>Deambula</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="S" value="N" />
          <Picker.Item label="N" value="S" />
        </Picker>
        <TextInput style={styles.input} placeholder="Local"></TextInput>

        <TextInput style={styles.input} placeholder="Inspeção"></TextInput>
        <TextInput style={styles.input} placeholder="Palpação"></TextInput>
        <TextInput style={styles.input} placeholder="Mensuração"></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>9 - Força Muscular</Text>
        <TextInput style={styles.input} placeholder="Musculo/Grupo"></TextInput>
        <TextInput style={styles.input} placeholder="Grau"></TextInput>
        <Button title="+"></Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>10 - ADM</Text>
        <TextInput style={styles.input} placeholder="Movimento"></TextInput>
        <TextInput style={styles.input} placeholder="Ativa"></TextInput>
        <TextInput style={styles.input} placeholder="Passiva"></TextInput>
        <Button title="+"></Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>11 - Complementos</Text>
        <TextInput style={styles.input} placeholder="Sensibilidade"></TextInput>
        <TextInput style={styles.input} placeholder="Dor: 0 a 10"></TextInput>
        <TextInput style={styles.input} placeholder="Clonus"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Reflexos e Reações"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Ausculta Cardiaca"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Testes Especiais"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Avaliação Funcional"
        ></TextInput>
        <TextInput style={styles.input} placeholder="Observações"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Exames Complementares/Laudos"
        ></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>12 - Objetivos Fisioterapeutico</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição objetivo fisioterapeutico/ Objetivo do tratamento"
        ></TextInput>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>13 - Condutas Fisioterapeuticas</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição conduta fisioterapeutica/ Condutas"
        ></TextInput>
      </View>

      <Button title="Finalizar Prontuario" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    fontStyle: "italic",
    fontWeight: "light",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
});

export default Prontuario;
