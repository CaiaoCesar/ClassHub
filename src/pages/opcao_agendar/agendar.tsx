import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
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

export default function Agendar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [pressionadoSetaEsquerda, setPressionadoSetaEsquerda] = useState<boolean>(false);
  const [pressionadoSetaDireita, setPressionadoSetaDireita] = useState<boolean>(false);
  const [pressionadoDatas, setPressionadoDatas] = useState<boolean>(false);
  const [pressionadoHorarios, setPressionadoHorarios] = useState<boolean>(false);
  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);

  return (
    <View style={style.container}>
      {/* Topo da tela */}
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

      {/* Botões de mensagens */}
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

      {/* Botão Agendar */}
      <TouchableOpacity
        style={[
          style.buttonAgendar, 
          { backgroundColor: pressionadoAgendar ? themes.colors.primary : themes.colors.secondary },
        ]}
        onPressIn={() => setPressionadoAgendar(true)}
        onPressOut={() => setPressionadoAgendar(false)}
      >
        <Image source={LinhaBaixo} style={style.linhaBaixo} resizeMode="contain" />
        <Text style={style.agendarText}>{themes.strings.agendarText}</Text>
      </TouchableOpacity>

      {/* Botão Voltar */}
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