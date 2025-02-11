import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "./styles"; // Importando o estilo
import { RootStackParamList } from "../../@types/types"; // Importe o tipo RootStackParamList

// Importe todas as imagens
import Splash from "../../assets/Splash.png"
import Splash1 from "../../assets/Splash1.png";
import Splash2 from "../../assets/Splash2.png";
import Splash3 from "../../assets/Splash3.png";
import Splash4 from "../../assets/Splash4.png";
import Splash5 from "../../assets/Splash5.png";
import Splash6 from "../../assets/Splash6.png";
import Splash7 from "../../assets/Splash7.png";
import Splash8 from "../../assets/Splash8.png";
import Splash9 from "../../assets/Splash9.png";
import Splash10 from "../../assets/Splash10.png";
import Splash11 from "../../assets/Splash11.png";
import Splash12 from "../../assets/Splash12.png";
import Splash13 from "../../assets/Splash13.png";

// Defina o tipo da navegação para a tela Splash
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "Splash">;

export default function TelaSplash() {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    // Array com todas as imagens
    const splashImages = [
        Splash,
        Splash1,
        Splash2,
        Splash3,
        Splash4,
        Splash5,
        Splash6,
        Splash7,
        Splash8,
        Splash9,
        Splash10,
        Splash11,
        Splash12,
        Splash13,
    ];

    // Estado para armazenar o índice da imagem atual
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Intervalo para alternar as imagens
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % splashImages.length);
        }, 250); // Altera o intervalo (em milissegundos) para controlar a velocidade da animação

        // Timer para navegar para a tela de Login após um tempo
        const navigationTimer = setTimeout(() => {
            navigation.replace("Login");
        }, 10000); // 10segundos

        return () => {
            clearInterval(imageInterval);
            clearTimeout(navigationTimer);
        };
    }, [navigation]);

    return (
        <View style={style.container}>
            <Image
                source={splashImages[currentImageIndex]} // Exibe a imagem atual
                style={style.splashImage}
                resizeMode="contain"
            />
        </View>
    );
}