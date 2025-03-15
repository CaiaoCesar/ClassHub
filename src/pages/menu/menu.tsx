import React, { useState, useEffect } from "react"; // Adicione o useEffect
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";
import { useCalendly } from "../../contexts/calendlyContext"; // Importe o useCalendly
import { setupWebhook } from "../../services/api"; // Importe a função setupWebhook

import { themes } from "../../global/themes";
import { style } from "./styles";

import Logo from "../../../assets/logo.png";
import IconLogout from "../../../assets/iconLogout.png";

export default function Menu() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { calendlyToken, clearCalendlyToken } = useCalendly(); // Adicione clearCalendlyToken

  const [pressionadoAgendar, setPressionadoAgendar] = useState<boolean>(false);
  const [pressionadoAgendamento, setPressionadoAgendamento] = useState<boolean>(false);
  const [pressionadoLogout, setPressionadoLogout] = useState<boolean>(false);

  // Configurar o webhook quando o token estiver disponível
  useEffect(() => {
    if (calendlyToken) {
      setupWebhook('https://sua-api.com/webhook', calendlyToken)
        .then(() => console.log('Webhook configurado com sucesso'))
        .catch((error) => console.error('Erro ao configurar webhook:', error));
    }
  }, [calendlyToken]);

  const handleLogout = () => {
    clearCalendlyToken(); // Limpar o token ao fazer logout
    navigation.navigate("Login");
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
      </View>

      <View style={style.boxBotton1}>
        <TouchableOpacity
          style={[
            style.button1,
            { backgroundColor: pressionadoAgendar ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoAgendar(true)}
          onPressOut={() => setPressionadoAgendar(false)}
          onPress={() => navigation.navigate("Agendar")}
        >
          <Text
            style={[
              style.textAgendar,
              { color: pressionadoAgendar ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.textAgendar}
          </Text>
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
          onPress={() => navigation.navigate("Agendamentos")}
        >
          <Text
            style={[
              style.textAgendamentos,
              { color: pressionadoAgendamento ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.textAgendamentos}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxBotton3}>
        <TouchableOpacity
          style={[
            style.button3,
            { backgroundColor: pressionadoLogout ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoLogout(true)}
          onPressOut={() => setPressionadoLogout(false)}
          onPress={handleLogout} // Usar handleLogout ao invés de navegar diretamente
        >
          <Image
            source={IconLogout}
            style={{
              width: 30,
              height: 28,
              marginRight: 10,
              left: 5,
              tintColor: pressionadoLogout ? themes.colors.fontEspecial : themes.colors.primary,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              style.textLogout,
              { color: pressionadoLogout ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.textLogout}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}