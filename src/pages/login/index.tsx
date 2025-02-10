import React from "react"; 

import {
    Text, View, Image,
    TouchableOpacity
} from "react-native"; 

import { style } from "./styles";

import Logo from "../../assets/logo.png";

export default function Login (){
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
                <TouchableOpacity style={style.button1}>
                    <Text style={style.textButton1}>Entrar com Gmail</Text>
                </TouchableOpacity>
            </View>

            <View style={style.boxBotton2}>
                <TouchableOpacity style={style.button2}>
                    <Text style={style.textButton2}>Entrar com ID Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}