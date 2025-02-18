import React, {useState} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";


import {themes} from "../../global/themes"; 
import {style} from "./styles"; 


import Logo from "../../../assets/logo.png";
import IconLogout from "../../../assets/iconLogout.png";

export default function Menu() {
  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoAgendamento, setPressionadoAgendamento] = useState<boolean>(false);

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
        >

          <Text style={style.textAgendamentos}>{themes.strings.textAgendamentos}</Text>

        </TouchableOpacity>
      </View>

      <View style={style.boxBotton3}>
        <TouchableOpacity
          style={[
            style.button3,
            { backgroundColor: pressionadoAgendamento ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoAgendamento(true)}
          onPressOut={() => setPressionadoAgendamento(false)}
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
