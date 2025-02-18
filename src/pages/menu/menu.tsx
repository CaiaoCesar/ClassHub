import React, {useState} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";

import {themes} from "../../global/themes"; 
import {style} from "./styles"; 


import Logo from "../../../assets/logo.png";
import IconLogout from "../../../assets/iconLogout.png";

export default function Menu() {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoAgendamento, setPressionadoAgendamento] = useState<boolean>(false);
  const [pressionadoLogout, setPressionadoLogout] = useState<boolean>(false);

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
      </View>

      <View style={style.boxBotton1}>
        <TouchableOpacity
          style={[
            style.button1,
            { backgroundColor: pressionadoAgendar ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoAgendar(true)}
          onPressOut={() => setPressionadoAgendar(false)}
          onPress={() => navigation.navigate('Agendar')}
        >

          <Text style={style.textAgendar}>{themes.strings.textAgendar}</Text>

        </TouchableOpacity>
      </View>

      <View style={style.boxBotton2}>
        <TouchableOpacity
          style={[
            style.button2,
            { backgroundColor: pressionadoAgendamento ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoAgendamento(true)}
          onPressOut={() => setPressionadoAgendamento(false)}
          onPress={() => navigation.navigate('Agendamentos')}
        >

          <Text style={style.textAgendamentos}>{themes.strings.textAgendamentos}</Text>

        </TouchableOpacity>
      </View>

      <View style={style.boxBotton3}>
        <TouchableOpacity
          style={[
            style.button3,
            { backgroundColor: pressionadoLogout? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoLogout(true)}
          onPressOut={() => setPressionadoLogout(false)}
          onPress={() => navigation.navigate('Login')}
        >
          <Image
            source={IconLogout}
            style={{ width: 30, height: 28, marginRight: 10, left: 5 }}
            resizeMode="contain"
          />
          
          <Text style={style.textLogout}>{themes.strings.textLogout}</Text>
         
        </TouchableOpacity>
      </View>
    </View>
  );
}
