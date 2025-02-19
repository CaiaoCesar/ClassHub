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
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pressionadoMessages, setPressionadoMessages] = useState<{ [key: string]: boolean }>({});

  // Define o tipo de `messages` como as chaves válidas de `themes.strings`
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

  const handlePressIn = (message: string) => {
    setPressionadoMessages((prev) => ({ ...prev, [message]: true }));
  };

  const handlePressOut = (message: string) => {
    setPressionadoMessages((prev) => ({ ...prev, [message]: false }));
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.textAgendamentos}>{themes.strings.textAgendamentos}</Text>
        <Image source={Linha} style={style.linhaCima} resizeMode="contain" />
      </View>

      {messages.map((message) => (
        <View key={message} style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages[message] ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => handlePressIn(message)}
            onPressOut={() => handlePressOut(message)}
          >
            <Text style={style.textMsgAgendamentos}>
              {themes.strings[message]}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={style.buttonCancelar}>
        <TouchableOpacity
          style={[
            style.buttonCancelar,
            { backgroundColor: pressionadoCancelar ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoCancelar(true)}
          onPressOut={() => setPressionadoCancelar(false)}
          onPress={() => setModalVisible(true)}
        >
          <Image source={Linha} style={style.linhaBaixo} resizeMode="contain" />
          <Text style={style.textCancelarAgendamento}>{themes.strings.textCancelarAgendamento}</Text>
        </TouchableOpacity>
      </View>

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
              style={style.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={style.confirma}>{themes.strings.confirma}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={[
          style.buttonVoltar,
          { backgroundColor: pressionadoVoltar ? themes.colors.primary : themes.colors.secondary },
        ]}
        onPressIn={() => setPressionadoVoltar(true)}
        onPressOut={() => setPressionadoVoltar(false)}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image source={Voltar} resizeMode="contain" style={style.Voltar} />
      </TouchableOpacity>
    </View>
  );
}