import React, { useState } from "react";
import { Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";

import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons"

import { ptBR } from "../../utils/localeCalendarConfig"

import { themes } from "../../global/themes";
import { style, calendarTheme } from "./styles";

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

import Logo from "../../../assets/logo.png";
import LinhaCima from "../../../assets/Line.png";
import LinhaMeio from "../../../assets/Line.png";
import LinhaBaixo from "../../../assets/Line.png";
import SetaEsquerda from "../../../assets/SetaEsquerda.png";
import SetaDireita from "../../../assets/SetaDireita.png";
import Voltar from "../../../assets/voltar.png";
import Verificado from "../../../assets/verificacao.png"

export default function Agendar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [pressionadoSetaEsquerda, setPressionadoSetaEsquerda] = useState<boolean>(false);
  const [pressionadoSetaDireita, setPressionadoSetaDireita] = useState<boolean>(false);
  const [pressionadoDatas, setPressionadoDatas] = useState<boolean>(false);

  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean> (false); 

  const [pressionadoHorarios, setPressionadoHorarios] = useState<{ [key: string]: boolean }>({});

  const[day, setDay ] = useState<DateData>()

   const horarios: (keyof typeof themes.strings)[] = [
      "horario1",
      "horario2",
      "horario3", 
      "horario4",
      "horario5", 
      "horario6",
    ];
  
    const handlePressIn = (horario: string) => {
      setPressionadoHorarios((prev) => ({ ...prev, [horario]: true }));
    };
  
    const handlePressOut = (horario: string) => {
      setPressionadoHorarios((prev) => ({ ...prev, [horario]: false }));
    };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
       

      <Image source={LinhaCima} style={style.linhaCima} resizeMode="contain" />
      </View>

      <View style={style.boxCalendar}>
        <View style={style.spaceCalendar}>
          <Calendar  
               style={{ flex: 1, width: '100%' }}
              renderArrow={(direction: "right" | "left") => (
                <Feather
                  size={24} // Reduzi o tamanho para 24 para melhor visualização
                  color={themes.colors.bgscreen}
                  name={`chevron-${direction}`}
                  style={direction === 'left' ? style.setaEsquerda : style.setaDireita}
                />
              )}
              headerStyle={style.calendarHeaderStyle}
              theme={calendarTheme}
              minDate={new Date().toDateString()}
              hideExtraDays
              onDayPress={setDay}
              markedDates={day ? { [day.dateString]: { selected: true } } : {}}
            />
        </View>
      
        <Image source={LinhaMeio} style={style.linhaMeio} resizeMode="contain" />     
      </View>

      {horarios.map((horario) => (
        <View key={horario} style={style.boxButtonHorarios}>
          <TouchableOpacity
            style={[
              style.buttonHorarios,
              { backgroundColor: pressionadoHorarios[horario] ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => handlePressIn(horario)}
            onPressOut={() => handlePressOut(horario)}
          >
            <Text style={style.textMsgHorarios}>
              {themes.strings[horario]}
            </Text>
          </TouchableOpacity>
        </View> 
      ))}
      <View style={style.boxAgendamento}>  
        <TouchableOpacity
          style={[
            style.buttonAgendar, 
            { backgroundColor: pressionadoAgendar ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoAgendar(true)}
          onPressOut={() => setPressionadoAgendar(false)}
          onPress={() => setModalVisible(true)}
        >
          <Image source={LinhaBaixo} style={style.linhaBaixo} resizeMode="contain" />
          <Text style={style.agendarText}>{themes.strings.agendarText}</Text>
        </TouchableOpacity>

        <Modal 
          animationType= "fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          >
            <View style={style.modalOverlay}>
              <View style={style.modalContent}>
                <Text style={style.confirmaAgendamento}>{themes.strings.confirmaAgendamento}</Text>
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

    </View>
  );
}