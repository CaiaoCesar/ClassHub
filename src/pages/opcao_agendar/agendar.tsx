import React, { useState } from "react";
import { Text, View, Image, Modal, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";
import { createEvent, getAvailableTimes } from "../../services/api"; // Adicione a função getAvailableTimes no serviço

import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

import { useCalendly } from "../../contexts/calendlyContext";

import { ptBR } from "../../utils/localeCalendarConfig";
import { themes } from "../../global/themes";
import { style, calendarTheme } from "./styles";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

import Logo from "../../../assets/logo.png";
import LinhaCima from "../../../assets/Line.png";
import LinhaMeio from "../../../assets/Line.png";
import LinhaBaixo from "../../../assets/Line.png";
import Voltar from "../../../assets/voltar.png";
import Verificado from "../../../assets/verificacao.png";

export default function Agendar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { calendlyToken } = useCalendly();

  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);
  const [day, setDay] = useState<DateData | null>(null);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);

  // Função para buscar horários disponíveis na data selecionada
  const handleDayPress = async (date: DateData) => {
    setDay(date); // Armazena a data selecionada
    setHorarioSelecionado(null); // Reseta o horário selecionado

    if (!calendlyToken) {
      Alert.alert('Erro', 'Token do Calendly não encontrado.');
      return;
    }

    try {
      // Busca os horários disponíveis para a data selecionada
      const availableTimes = await getAvailableTimes(date.dateString, calendlyToken);
      setHorariosDisponiveis(availableTimes); // Atualiza o estado com os horários disponíveis
    } catch (error) {
      console.error('Error fetching available times:', error);
      Alert.alert('Erro', 'Não foi possível carregar os horários disponíveis.');
      setHorariosDisponiveis([]); // Limpa os horários disponíveis em caso de erro
    }
  };

  // Função para agendar um horário
  const handleAgendar = async () => {
    if (!calendlyToken) {
      Alert.alert('Erro', 'Token do Calendly não encontrado.');
      return;
    }

    if (day && horarioSelecionado) {
      const eventData = {
        start_time: new Date(`${day.dateString}T${horarioSelecionado}:00`).toISOString(),
        end_time: new Date(`${day.dateString}T${horarioSelecionado}:00`).toISOString(),
      };

      try {
        await createEvent(eventData, calendlyToken); // Passa o token para a função
        setModalVisible(true);
        setHorariosDisponiveis((prev) => prev.filter((h) => h !== horarioSelecionado));
      } catch (error) {
        console.error('Error creating event:', error);
        Alert.alert('Erro', 'Não foi possível agendar o horário.');
      }
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
      </View>

      <View style={style.boxCalendar}>
        <Calendar
          style={style.calendar}
          renderArrow={(direction: "right" | "left") => (
            <View style={style.arrowContainer}>
              <Feather
                name={`chevron-${direction}`}
                size={35}
                color={themes.colors.primary}
              />
              <Image source={LinhaCima} style={style.linhaCima} resizeMode="contain" />
            </View>
          )}
          theme={calendarTheme}
          minDate={new Date().toDateString()}
          hideExtraDays
          onDayPress={handleDayPress} // Atualiza a função para buscar horários disponíveis
          markedDates={day ? { [day.dateString]: { selected: true } } : {}}
        />

        <Text style={style.textHorarios}>{themes.strings.textHorarios}</Text>
      </View>

      <View style={style.horariosContainer}>
        <View style={style.horariosGrid}>
          <Image source={LinhaMeio} style={style.linhaMeio} resizeMode="contain" />
          {horariosDisponiveis.length > 0 ? (
            horariosDisponiveis.map((horario) => (
              <Pressable
                key={horario}
                style={[
                  style.buttonHorarios,
                  horarioSelecionado === horario && style.buttonHorariosSelected,
                ]}
                onPress={() => setHorarioSelecionado(horario)}
              >
                <Text
                  style={[
                    style.textMsgHorarios,
                    horarioSelecionado === horario && style.textMsgHorariosSelected,
                  ]}
                >
                  {new Date(horario).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
              </Pressable>
            ))
          ) : (
            <Text style={style.textMsgHorarios}>
              {day ? "Nenhum horário disponível para esta data." : "Selecione uma data."}
            </Text>
          )}
        </View>
      </View>

      <View style={style.boxAgendamento}>
        <Image source={LinhaBaixo} style={style.linhaBaixo} resizeMode="contain" />
        <Pressable
          style={({ pressed }) => [
            style.buttonAgendar,
            {
              backgroundColor: pressed ? themes.colors.primary : themes.colors.secondary,
            },
          ]}
          onPressIn={() => setPressionadoAgendar(true)}
          onPressOut={() => setPressionadoAgendar(false)}
          onPress={handleAgendar}
          disabled={!horarioSelecionado} // Desabilita o botão se nenhum horário estiver selecionado
        >
          <Text
            style={[
              style.agendarText,
              { color: pressionadoAgendar ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.agendarText}
          </Text>
        </Pressable>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={style.modalOverlay}>
            <View style={style.modalContent}>
              <Text style={style.confirmaAgendamento}>{themes.strings.confirmaAgendamento}</Text>
              <Image source={Verificado} style={style.verificado} resizeMode="contain" />
              <Pressable
                style={style.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={style.confirma}>{themes.strings.confirma}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={({ pressed }) => [
            style.buttonVoltar,
            {
              backgroundColor: pressed ? themes.colors.primary : themes.colors.secondary,
            },
          ]}
          onPressIn={() => setPressionadoVoltar(true)}
          onPressOut={() => setPressionadoVoltar(false)}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image source={Voltar} resizeMode="contain" style={style.Voltar} />
        </Pressable>
      </View>
    </View>
  );
}