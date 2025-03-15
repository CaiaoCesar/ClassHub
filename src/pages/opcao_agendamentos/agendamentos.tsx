import React, { useEffect, useState } from "react";
import { Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";
import { getScheduledEvents, cancelEvent } from "../../services/api";
import { useCalendly } from "../../contexts/calendlyContext"; // Importe o hook useCalendly

import { themes } from "../../global/themes";
import { style } from "./styles";

import Logo from "../../../assets/logo.png";
import Linha from "../../../assets/Line.png";
import Voltar from "../../../assets/voltar.png";
import Verificado from "../../../assets/verificacao.png";

export default function Agendamentos() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { calendlyToken } = useCalendly(); // Acesse o token do Calendly

  const [pressionadoCancelar, setPressionadoCancelar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  const [pressionadoConfirmar, setPressionadoConfirmar] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        if (calendlyToken) { // Verifique se o token está disponível
          const data = await getScheduledEvents(calendlyToken);
          setEvents(data.collection);
        }
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    loadEvents();
  }, [calendlyToken]); // Adicione calendlyToken como dependência

  const handleCancelEvent = async (eventId: string) => {
    try {
      if (calendlyToken) { // Verifique se o token está disponível
        await cancelEvent(eventId, calendlyToken);
        setModalVisible(true);
        setEvents(events.filter(event => event.uri !== eventId));
      }
    } catch (error) {
      console.error('Error canceling event:', error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.textAgendamentos}>{themes.strings.textAgendamentos}</Text>
        <Image source={Linha} style={style.linhaCima} resizeMode="contain" />
      </View>

      {events.map((event) => (
        <View key={event.uri} style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              {
                backgroundColor:
                  mensagemSelecionada === event.uri ? themes.colors.primary : themes.colors.secondary,
              },
            ]}
            onPress={() => setMensagemSelecionada(event.uri)}
          >
            <Text
              style={[
                style.textMsgAgendamentos,
                {
                  color:
                    mensagemSelecionada === event.uri
                      ? themes.colors.fontEspecial
                      : themes.colors.primary,
                },
              ]}
            >
              {new Date(event.start_time).toLocaleString()}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

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
          onPress={() => mensagemSelecionada && handleCancelEvent(mensagemSelecionada)}
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