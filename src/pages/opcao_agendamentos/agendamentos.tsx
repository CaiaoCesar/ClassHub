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

export default function Agendamentos() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [pressionadoMessages, setPressionadoMessages] = useState<boolean>(false);
    const [pressionadoCancelar, setPressionadoCancelar] = useState<boolean>(false);
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
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message1}</Text>

          </TouchableOpacity>
        </View>


        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message2}</Text>

          </TouchableOpacity>
        </View>
  
        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message3}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message4}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message5}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message6}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message7}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.boxButtonMessages}>
          <TouchableOpacity
            style={[
              style.buttonMessages,
              { backgroundColor: pressionadoMessages ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoMessages(true)}
            onPressOut={() => setPressionadoMessages(false)}
          >
  
        
            <Text style={style.textMsgAgendamentos}>{themes.strings.message8}</Text>

          </TouchableOpacity>
        </View>

        <View style={style.buttonCancelar}>
          <TouchableOpacity
            style={[
              style.buttonCancelar,
              { backgroundColor: pressionadoCancelar ? themes.colors.primary : themes.colors.secondary },
            ]}
            onPressIn={() => setPressionadoCancelar(true)}
            onPressOut={() => setPressionadoCancelar(false)}
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