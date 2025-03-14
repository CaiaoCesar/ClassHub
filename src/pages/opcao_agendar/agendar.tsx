import React, { useState } from "react";
import { Text, View, Image, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";

import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

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

  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);
  const [day, setDay] = useState<DateData>();

  const horarios: (keyof typeof themes.strings)[] = [
    "horario1",
    "horario2",
    "horario3",
    "horario4",
    "horario5",
    "horario6",
  ];

  const handleHorarioPress = (horario: string) => {
    setHorarioSelecionado(horario === horarioSelecionado ? null : horario);
  };

  return (
    <View style={style.container}>
      {/* Cabeçalho */}
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
      </View>

      {/* Calendário */}
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
          onDayPress={setDay}
          markedDates={day ? { [day.dateString]: { selected: true } } : {}}
        />
        
        <Text style={style.textHorarios}>{themes.strings.textHorarios}</Text>
      </View>

      {/* Horários */}
      <View style={style.horariosContainer}>
        <View style={style.horariosGrid}>
          <Image source={LinhaMeio} style={style.linhaMeio} resizeMode="contain" />
          {horarios.map((horario) => (
            <Pressable
              key={horario}
              style={[
                style.buttonHorarios,
                horarioSelecionado === horario && style.buttonHorariosSelected,
              ]}
              onPress={() => handleHorarioPress(horario)}
            >
              <Text
                style={[
                  style.textMsgHorarios,
                  horarioSelecionado === horario && style.textMsgHorariosSelected,
                ]}
              >
                {themes.strings[horario]}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Rodapé */}
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
          onPress={() => setModalVisible(true)}
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