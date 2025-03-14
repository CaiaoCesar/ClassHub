import React, { useState } from "react";
import { Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";

import { themes } from "../../global/themes";
import { style } from "./styles";

import Logo from "../../../assets/logo.png";
import Linha from "../../../assets/Line.png";
import Voltar from "../../../assets/voltar.png";
import Verificado from "../../../assets/verificacao.png";

export default function Agendamentos() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [pressionadoCancelar, setPressionadoCancelar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  const [pressionadoConfirmar, setPressionadoConfirmar] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string | null>(null); // Estado para a mensagem selecionada

  const messages: (keyof typeof themes.strings)[] = [
    "message1",
    "message2",
    "message3",
    "message4",
    "message5",
    "message6",
    "message7",
    "message8",
  ];

  const handlePressMessage = (message: string) => {
    // Se a mensagem já estiver selecionada, desselecione. Caso contrário, selecione.
    setMensagemSelecionada((prev) => (prev === message ? null : message));
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.textAgendamentos}>{themes.strings.textAgendamentos}</Text>
        <Image source={Linha} style={style.linhaCima} resizeMode="contain" />
      </View>

      {/* Lista de mensagens */}
      {messages.map((message) => (
        <View key={message} style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              {
                backgroundColor:
                  mensagemSelecionada === message ? themes.colors.primary : themes.colors.secondary,
              },
            ]}
            onPress={() => handlePressMessage(message)} // Alterna a seleção ao clicar
          >
            <Text
              style={[
                style.textMsgAgendamentos,
                {
                  color:
                    mensagemSelecionada === message
                      ? themes.colors.fontEspecial
                      : themes.colors.primary,
                },
              ]}
            >
              {themes.strings[message]}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Botão Cancelar */}
      <View style={style.buttonCancelar}>
        <TouchableOpacity
          style={[
            style.buttonCancelar,
            {
              backgroundColor: pressionadoCancelar ? themes.colors.primary : themes.colors.secondary,
            },
          ]}
          onPressIn={() => setPressionadoCancelar(true)}
          onPressOut={() => setPressionadoCancelar(false)}
          onPress={() => setModalVisible(true)}
        >
          <Image source={Linha} style={style.linhaBaixo} resizeMode="contain" />
          <Text
            style={[
              style.textCancelarAgendamento,
              { color: pressionadoCancelar ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.textCancelarAgendamento}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal de confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={style.modalOverlay}>
          <View style={style.modalContent}>
            <Text style={style.confirmaCancelamento}>{themes.strings.confirmaCancelamento}</Text>
            <Image source={Verificado} style={style.verificado} resizeMode="contain" />
            <TouchableOpacity
              style={[
                style.modalButton,
                {
                  backgroundColor: pressionadoConfirmar ? themes.colors.primary : themes.colors.secondary,
                },
              ]}
              onPressIn={() => setPressionadoConfirmar(true)}
              onPressOut={() => setPressionadoConfirmar(false)}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={[
                  style.confirma,
                  { color: pressionadoConfirmar ? themes.colors.fontEspecial : themes.colors.primary },
                ]}
              >
                {themes.strings.confirma}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão Voltar */}
      <TouchableOpacity
        style={[
          style.buttonVoltar,
          {
            backgroundColor: pressionadoVoltar ? themes.colors.primary : themes.colors.secondary,
          },
        ]}
        onPressIn={() => setPressionadoVoltar(true)}
        onPressOut={() => setPressionadoVoltar(false)}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          source={Voltar}
          resizeMode="contain"
          style={[
            style.Voltar,
            {
              tintColor: pressionadoVoltar ? themes.colors.fontEspecial : themes.colors.primary,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}