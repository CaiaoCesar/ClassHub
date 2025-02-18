import React, {useState} from "react"; 
import {Text, View, Image, TouchableOpacity} from "react-native"; 

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";

import {themes} from "../../global/themes";
import {style} from "./styles"; 

import Logo from "../../../assets/logo.png";
import Linha from "../../../assets/Line.png";
import Voltar from "../../../assets/voltar.png";


export default function Agendar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [pressionadoDatas, setPressionadoDatas] = useState<boolean>(false);
    const [pressionadoHorarios, setPressionadoHorarios] = useState<boolean>(false);
    const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
    const [pressionadoVoltar, setPressionadoVoltar] = useState<boolean>(false);
  
   
    return (
      <View style={style.container}>
        <View style={style.boxTop}>
          <Image
            source={Logo}
            style={style.logo}
            resizeMode="contain"
          />

          <Text style={style.textAgendamentos}>{themes.strings.textAgendamentos}</Text>

          <Image
            source={Linha}
            style={style.linhaCima}
            resizeMode="contain"
          />
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
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message7}</Text>

          </TouchableOpacity>
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
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message8}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.buttonCancelar}>
          <TouchableOpacity
            style={[
              style.buttonCancelar,
              { backgroundColor: pressionadoAgendar ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoAgendar(true)}
            onPressOut={() => setPressionadoAgendar(false)}
          >

            <Image
                source={Linha}
                style={style.linhaBaixo}
                resizeMode="contain"
            />

            <Text style={style.textCancelarAgendamento}>{themes.strings.textCancelarAgendamento}</Text>
           
          </TouchableOpacity>
        </View>

        
          <TouchableOpacity
            style={[
              style.buttonVoltar,
              { backgroundColor: pressionadoVoltar ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoVoltar(true)}
            onPressOut={() => setPressionadoVoltar(false)}
            onPress={() => navigation.navigate("Menu")}
          >

            <Image
                source={Voltar}
                resizeMode="contain"
                style={style.Voltar}
            />
           
          </TouchableOpacity>
     

       
      </View>

      
    );

  }
    