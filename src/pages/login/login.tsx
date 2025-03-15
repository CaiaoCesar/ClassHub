import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/types";
import { useCalendly } from "../../contexts/calendlyContext";
import { exchangeCodeForToken } from "../../services/api";

import { themes } from "../../global/themes";
import { style } from "./styles";

import Logo from "../../../assets/logo.png";
import IconApple from "../../../assets/Apple.png";
import IconGmail from "../../../assets/logos_google-gmail.png";

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { setCalendlyToken, setRefreshToken } = useCalendly();

  const [pressionadoGmail, setPressionadoGmail] = useState<boolean>(false);
  const [pressionadoApple, setPressionadoApple] = useState<boolean>(false);

  const handleLogin = () => {
    const authUrl = `https://auth.calendly.com/oauth/authorize?client_id=${process.env.EXPO_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.EXPO_PUBLIC_REDIRECT_URL}`;
    Linking.openURL(authUrl);
  };

  // Capturar o código de autorização após o redirecionamento
  Linking.addEventListener('url', async (event) => {
    const url = event.url;
    const code = new URL(url).searchParams.get('code');

    if (code) {
      try {
        const { access_token, refresh_token } = await exchangeCodeForToken(code);
        setCalendlyToken(access_token);
        setRefreshToken(refresh_token);
        navigation.navigate("Menu");
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  });

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
      </View>

      <View style={style.boxBotton1}>
        <TouchableOpacity
          style={[
            style.button1,
            { backgroundColor: pressionadoGmail ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoGmail(true)}
          onPressOut={() => setPressionadoGmail(false)}
          onPress={handleLogin}
        >
          <Image
            source={IconGmail}
            style={{
              width: 30,
              height: 23,
              marginRight: 10,
              left: 5,
              tintColor: pressionadoGmail ? themes.colors.fontEspecial : themes.colors.primary,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              style.textGmail,
              { color: pressionadoGmail ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.textGmail}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxBotton2}>
        <TouchableOpacity
          style={[
            style.button2,
            { backgroundColor: pressionadoApple ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoApple(true)}
          onPressOut={() => setPressionadoApple(false)}
          onPress={handleLogin}
        >
          <Image
            source={IconApple}
            style={{
              width: 30,
              height: 28,
              marginRight: 10,
              left: 5,
              tintColor: pressionadoApple ? themes.colors.fontEspecial : themes.colors.primary,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              style.textAppleID,
              { color: pressionadoApple ? themes.colors.fontEspecial : themes.colors.primary },
            ]}
          >
            {themes.strings.textAppleID}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}