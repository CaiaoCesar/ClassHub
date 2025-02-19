import React, { useState } from "react";
import { Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";

import { themes } from "../../global/themes";
import { style } from "./styles";

import Logo from "../../../assets/logo.png";
import LinhaCima from "../../../assets/Line.png";
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
  const [pressionadoHorarios, setPressionadoHorarios] = useState<boolean>(false);
  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean> (false); 

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
       
        <TouchableOpacity
        style={[
          style.ButtonSetaEsquerda,
          { backgroundColor: pressionadoSetaEsquerda ? themes.colors.primary : themes.colors.secondary },
        ]}
        onPressIn={() => setPressionadoSetaEsquerda(true)}
        onPressOut={() => setPressionadoSetaEsquerda(false)}
        
      >
         <Image source={SetaEsquerda} style={style.setaEsquerda} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          style.ButtonSetaDireita,
          { backgroundColor: pressionadoSetaDireita ? themes.colors.primary : themes.colors.secondary },
        ]}
        onPressIn={() => setPressionadoSetaDireita(true)}
        onPressOut={() => setPressionadoSetaDireita(false)}
        
      >
         <Image source={SetaDireita} style={style.setaDireita} resizeMode="contain" />
      </TouchableOpacity>

      <Image source={LinhaCima} style={style.linhaCima} resizeMode="contain" />
      </View>

      <View style={style.boxButtonMessages}>
        <TouchableOpacity
          style={[
            style.buttonMessages,
            { backgroundColor: pressionadoHorarios ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoHorarios(true)}
          onPressOut={() => setPressionadoHorarios(false)}
        >
          <Text style={style.textMsgAgendamentos}>{themes.strings.message7}</Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxButtonMessages}>
        <TouchableOpacity
          style={[
            style.buttonMessages,
            { backgroundColor: pressionadoDatas ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoDatas(true)}
          onPressOut={() => setPressionadoDatas(false)}
        >
          <Text style={style.textMsgAgendamentos}>{themes.strings.message8}</Text>
        </TouchableOpacity>
      </View>

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
  );
}