import {
  View,
  Text,
  TouchableOpacityProps,
  Modal,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Jogos from "@/app/components/Jogos";
import { useState, useEffect } from "react";
import { Button } from "@/app-example/components/button";
import { StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import InputData from "@/app/components/Utils/DataPicker";
import { TextInput, Switch } from "react-native";
import { useSettingsStore } from "@/app/store/useSettingsStore";
import { getQuadras } from "@/app/services/quadrasService";
import { getCategorias } from "@/app/services/categoriasService";
import { Quadra } from "@/app/types/Quadra";
import { Categoria } from "@/app/types/Categoria";

const torneio1 = {
  data: "10/06/2022",
  jogadores: "",
};

const ChaveA = [
  { direita: "Lebron", esquerda: "Tapia" },
  { direita: "Chingotto", esquerda: "Franco" },
  { direita: "Leandro", esquerda: "Gastaud" },
  { direita: "Braga", esquerda: "Rota" },
  { direita: "Tuan", esquerda: "Denis" },
];

const ChaveB = [
  { direita: "Lebron", esquerda: "Tapia" },
  { direita: "Chingotto", esquerda: "Franco" },
  { direita: "Leandro", esquerda: "Gastaud" },
  { direita: "Braga", esquerda: "Rota" },
];

const ChaveC = [
  { direita: "Lebron", esquerda: "Tapia" },
  { direita: "Chingotto", esquerda: "Franco" },
  { direita: "Leandro", esquerda: "Gastaud" },
  { direita: "Braga", esquerda: "Rota" },
];

export default function JogosScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const [quadras, setQuadras] = useState<Quadra[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [nomeTorneio, setNomeTorneio] = useState("");
  const [isPadel, setIsPadel] = useState(false);
  const [isBeach, setIsBeach] = useState(false);
  const [modalidade, setModalidade] = useState<"padel" | "beach" | null>(null);
  const [logoPatrocinador, setLogoPatrocinador] = useState("");
  const [dataInicio, setDataInicio] = useState<Date | null>(null);
  const [dataFim, setdataFim] = useState<Date | null>(null);
  const [horaInicio, setHoraInicio] = useState<string>("14:30:00");
  const [horaFim, setHoraFim] = useState<string>("14:30:00");
  const [games, setGames] = useState("");
  const [minJogadores, setMinJogadores] = useState("");
  const [maxJogadores, setMaxJogadores] = useState("");
  const [quadrasSelecionadas, setQuadrasSelecionadas] = useState<number[]>([]);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<
    number[]
  >([]);

  const categoriasDisponiveis = [
    { id: 10, nome: "Mista A" },
    { id: 12, nome: "Masculina B" },
    { id: 15, nome: "Feminina Open" },
  ];

  async function fetchQuadras() {
    try {
      const data = await getQuadras();
      console.log(data);

      setQuadras(data);
    } catch (error) {
      console.log("Erro ao carregar quadras: ", error);
    } finally {
      // setLoading(false);
    }
  }

  async function fetchCategorias() {
    try {
      const data = await getCategorias();
      console.log(data);

      setCategorias(data);
    } catch (error) {
      console.log("Erro ao carregar quadras: ", error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuadras();
    fetchCategorias();
  }, []);

  const toggleQuadra = (id: number) => {
    setQuadrasSelecionadas((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );

    console.log("logoPatrocinado");

    console.log(logoPatrocinador);
  };

  const toggleCategoria = (id: number) => {
    setCategoriasSelecionadas((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const torneio = {
    nomeTorneio,
    isPadel: isPadel ? 1 : 0,
    isBeach: isBeach ? 1 : 0,
    logoPatrocinador,
    dataInicio: dataInicio?.toISOString().split("T")[0], // yyyy-mm-dd
    dataFim: dataFim?.toISOString().split("T")[0],
    horaInicio,
    horaFim,
    games: Number(games),
    minJogadores: Number(minJogadores),
    maxJogadores: Number(maxJogadores),
    quadrasSelecionadas,
    categoriasSelecionadas,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2C2C2C",
      }}
    >
      <View style={styles.divNovoTorneio}>
        {/* <Text>Componente para selecionar a data</Text> */}
        <InputData />
        <Button title="Novo Torneio" onPress={() => setModalVisible(true)} />
        <Modal
          animationType="slide" // fade | slide | none
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Android back button
        >
          <View style={modalStyles.modalBackground}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.title}>Criar Torneio Gatorade</Text>
              <View>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginBottom: 16,
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        radioStyles.radioButton,
                        modalidade === "padel" &&
                          radioStyles.radioButtonSelected,
                      ]}
                      onPress={() => setModalidade("padel")}
                    >
                      <Text style={radioStyles.radioText}>Padel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        radioStyles.radioButton,
                        modalidade === "beach" &&
                          radioStyles.radioButtonSelected,
                      ]}
                      onPress={() => setModalidade("beach")}
                    >
                      <Text style={radioStyles.radioText}>Beach Tennis</Text>
                    </TouchableOpacity>
                  </View>

                  <Text>Data de Início</Text>
                  <DateTimePicker
                    value={dataInicio || new Date()}
                    mode="date"
                    display="default"
                    onChange={(e, selected) => {
                      if (selected) setDataInicio(selected);
                    }}
                  />

                  <Text>Hora de Início</Text>
                  <DateTimePicker
                    value={new Date(`1970-01-01T${horaInicio}`)}
                    mode="time"
                    display="default"
                    onChange={(e, selected) => {
                      if (selected) {
                        const h = selected
                          .getHours()
                          .toString()
                          .padStart(2, "0");
                        const m = selected
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        setHoraInicio(`${h}:${m}:00`);
                      }
                    }}
                  />

                  <Text>Data de Fim</Text>
                  <DateTimePicker
                    value={dataFim || new Date()}
                    mode="date"
                    display="default"
                    onChange={(e, selected) => {
                      if (selected) setdataFim(selected);
                    }}
                  />

                  <Text>Hora de Fim</Text>
                  <DateTimePicker
                    value={new Date(`1970-01-01T${horaFim}`)}
                    mode="time"
                    display="default"
                    onChange={(e, selected) => {
                      if (selected) {
                        const h = selected
                          .getHours()
                          .toString()
                          .padStart(2, "0");
                        const m = selected
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        setHoraFim(`${h}:${m}:00`);
                      }
                    }}
                  />

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Text>Quantidade</Text>
                      <Text>de Games</Text>
                      <TextInput
                        style={[modalStyles.input, { width: 50 }]}
                        keyboardType="numeric"
                        placeholder="Ex: 3"
                        value={games}
                        onChangeText={setGames}
                      />
                    </View>
                    <View>
                      <Text>Quantidade de Jogadores</Text>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View>
                          <Text>Min.</Text>
                          <TextInput
                            style={[modalStyles.input, { width: 50 }]}
                            keyboardType="numeric"
                            placeholder="Ex: 2"
                            value={minJogadores}
                            onChangeText={setMinJogadores}
                          />
                        </View>
                        <View>
                          <Text>Max.</Text>
                          <TextInput
                            style={[modalStyles.input, { width: 50 }]}
                            keyboardType="numeric"
                            placeholder="Ex: 4"
                            value={maxJogadores}
                            onChangeText={setMaxJogadores}
                          />
                        </View>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={{ marginTop: 10 }}>Selecione as Quadras:</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 12,
                      }}
                    >
                      {quadras
                        .filter((quadra) =>
                          modalidade === "padel"
                            ? quadra.isPadel === 1
                            : modalidade === "beach"
                            ? quadra.isBeach === 1
                            : false
                        )
                        .map((quadra) => (
                          <View>
                            <Text>Quadra {quadra.id}</Text>
                            <TouchableOpacity
                              key={quadra.id}
                              onPress={() => toggleQuadra(quadra.id)}
                              style={{
                                width: 60,
                                height: 40,
                                marginBottom: 12,
                                borderRadius: 12,
                                overflow: "hidden",
                                borderWidth: 2,
                                borderColor: quadrasSelecionadas.includes(
                                  quadra.id
                                )
                                  ? "#4CAF50"
                                  : "transparent",
                              }}
                            >
                              <ImageBackground
                                source={{ uri: quadra.logoPatrocinador }}
                                resizeMode="cover"
                                style={{
                                  flex: 1,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: 50,
                                }}
                              >
                                {/* <Text
                                style={{
                                  color: "#fff",
                                  backgroundColor: "rgba(0,0,0,0.6)",
                                  paddingHorizontal: 6,
                                  paddingVertical: 2,
                                  borderRadius: 4,
                                }}
                              >
                                {quadra.nomeQuadra}
                              </Text> */}
                              </ImageBackground>
                            </TouchableOpacity>
                          </View>
                        ))}
                    </View>
                  </View>

                  <View>
                    <Text style={{ marginTop: 10 }}>
                      Selecione as Categorias:
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 12,
                      }}
                    >
                      {categorias
                        .filter((categoria) =>
                          modalidade === "padel"
                            ? categoria.isPadel === 1
                            : modalidade === "beach"
                            ? categoria.isBeachTenis === 1
                            : false
                        )
                        .map((categoria) => (
                          <View>
                            <TouchableOpacity
                              key={categoria.id}
                              onPress={() => toggleCategoria(categoria.id)}
                              style={{
                                marginBottom: 12,
                                borderRadius: 12,
                                overflow: "hidden",
                                borderWidth: 2,
                                borderColor: categoriasSelecionadas.includes(
                                  categoria.id
                                )
                                  ? "#4CAF50"
                                  : "transparent",
                              }}
                            >
                              <Text
                                style={{
                                  color: "#fff",
                                  backgroundColor: "rgba(0,0,0,0.6)",
                                  paddingHorizontal: 6,
                                  paddingVertical: 2,
                                  borderRadius: 4,
                                }}
                              >
                                {categoria.nome}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                    </View>
                  </View>
                </View>
              </View>

              <View style={modalStyles.footerModal}>
                <Pressable
                  style={modalStyles.buttonClose}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={modalStyles.textClose}>Fechar</Text>
                </Pressable>

                <Pressable style={modalStyles.buttonClose}>
                  <Text style={modalStyles.textClose}>Criar Torneio</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.divEdicaoGatorade}>
        <Text>Jogo: 10/06/2025</Text>
        <Button title="Editar" />
      </View>
      <Jogos chave="A" />
      <Jogos chave="B" />
      <Jogos chave="C" />
    </View>
  );
}

const styles = StyleSheet.create({
  divNovoTorneio: {
    display: "flex",
    flexDirection: "row",
  },
  divEdicaoGatorade: {
    display: "flex",
    flexDirection: "row",
  },
});

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // fundo escuro
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textClose: {
    color: "white",
    fontWeight: "bold",
  },
  footerModal: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  footerCriarTorneio: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    width: "100%",
  },
});

const radioStyles = StyleSheet.create({
  radioButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  radioButtonSelected: {
    backgroundColor: "#2196F3",
    borderColor: "#2196F3",
  },
  radioText: {
    color: "#000",
    fontWeight: "bold",
  },
});
