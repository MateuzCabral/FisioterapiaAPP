import React, { useState } from "react";
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

const Prontuario = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [isSelectedDM, setIsSelectedDM] = useState(null);
  const [isSelectedHAS, setIsSelectedHAS] = useState(null);
  const [isSelectedTri, setIsSelectedTri] = useState(null);
  const [isSelectedBic, setIsSelectedBic] = useState(null);
  const [isSelectedRad, setIsSelectedRad] = useState(null);
  const [isSelectedPat, setIsSelectedPat] = useState(null);
  const [isSelectedCal, setIsSelectedCal] = useState(null);
  const [isSelectedCuAb, setIsSelectedCuAb] = useState(null);
  const [isSelectedCuPla, setIsSelectedCuPla] = useState(null);
  const [isSelectedCon, setIsSelectedCon] = useState(null);
  const [isSelectedUlc, setIsSelectedUlc] = useState(null);
  const [isSelectedDeam, setIsSelectedDeam] = useState(null);

  return (
    <ScrollView>
      {/* Prontuario */}
      <View style={styles.scrollStyle}>
        <Text style={styles.header}>Prontuario do paciente</Text>

        {/* Primeira Section */}
        <View style={styles.section}>
          <TextInput style={styles.input} placeholder="Unidade:" />

          <TextInput style={styles.input} placeholder="Setor de Atendimento:" />

          <TextInput style={styles.input} placeholder="Data: 00/00/0000" />
        </View>

        {/* Section de Dados Pessoais */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>
            1 - Identificação do paciente/Dados pessoais
          </Text>
          {[
            "Nome:",
            "Data de Nascimento:",
            "Sexo:",
            "Endereço:",
            "Estado Civil:",
            "Profissão:",
            "Telefone:",
            "Responsavel:",
            "Em caso de emergência avisar:",
            "Telefone de emeregência:",
            "Diagnostico Clinico:",
            "Diagnostico Fisioterapeutico:",
            "Medico Responsavel:",
          ].map((field) => (
            <React.Fragment key={field}>
              <TextInput style={styles.input} placeholder={field} />
            </React.Fragment>
          ))}
        </View>

        {/* Section Anamnese */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>2 - Anamnese</Text>
          {["Queixa Principal:", "HMA:", "HMP:", "AVD:"].map((field) => (
            <React.Fragment key={field}>
              <TextInput style={styles.input} placeholder={field} />
            </React.Fragment>
          ))}

          {/* Cirurgias Anamnese */}
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Realizou Cirurgias?</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelected === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelected("sim")}
              >
                <Text
                  style={
                    isSelected === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelected === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelected("nao")}
              >
                <Text
                  style={
                    isSelected === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={7}
            placeholder="Quais:"
          />

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={7}
            placeholder="Resultado de exames realizados:"
          />

          {/* Doenças Concomitantes Anamnese */}
          <Text style={styles.subText}>Doenças Concomitantes:</Text>
          <View style={styles.checkboxContainer}>
            {/* DM */}
            <Text style={styles.label}>DM:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedDM === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedDM("sim")}
              >
                <Text
                  style={
                    isSelectedDM === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedDM === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedDM("nao")}
              >
                <Text
                  style={
                    isSelectedDM === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* HAS */}
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>HAS:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedHAS === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedHAS("sim")}
              >
                <Text
                  style={
                    isSelectedHAS === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedHAS === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedHAS("nao")}
              >
                <Text
                  style={
                    isSelectedHAS === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput style={styles.input} placeholder="Outros:" multiline numberOfLines={4} />
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>3 - Antecedentes Familiares:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>4 - Patologias Associadas:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>5 - Antropometria:</Text>
          <TextInput style={styles.input} placeholder="Peso:"></TextInput>
          <TextInput style={styles.input} placeholder="Altura:"></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>6 - Estado Geral:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>7 - Independencia de Locomoção:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>8 - Exames Fisicos</Text>
          <Text style={styles.subText}>Dados Vitais</Text>
          <TextInput style={styles.input} placeholder="PA:"></TextInput>
          <TextInput style={styles.input} placeholder="FC:"></TextInput>
          <TextInput style={styles.input} placeholder="FR:"></TextInput>
          <TextInput style={styles.input} placeholder="AP:"></TextInput>
          <TextInput style={styles.input} placeholder="SpO2:"></TextInput>
          <TextInput style={styles.input} placeholder="Temp:"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Exames Especificos" multiline numberOfLines={5}
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
          <TextInput
            style={styles.input}
            placeholder="Musculo/Grupo"
          ></TextInput>
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
          <TextInput
            style={styles.input}
            placeholder="Sensibilidade"
          ></TextInput>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    marginTop: 35,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 8,
  },
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
  subText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontStyle: "italic",
    fontWeight: "light",
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
  checkboxContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  checkInput: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "italic",
  },
  checkbox: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 4,
  },
  checked: {
    backgroundColor: "#00005d",
  },
  unchecked: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
  },
  checkedText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  uncheckedText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
});

export default Prontuario;
