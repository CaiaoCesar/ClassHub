import { Button, Dimensions, StyleSheet } from "react-native";
import {themes} from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:`center`, 
        justifyContent:`center`,
    },

    boxTop:{
        height: Dimensions.get('window').height/1,
        width: `100%`,
        backgroundColor: themes.colors.bgscreen,
        alignItems:`center`, 
        justifyContent:`center`
    },

    boxCalendar:{
        height: Dimensions.get('window').height/45,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxAgendamento:{
        height: Dimensions.get('window').height/3,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxButtonHorarios:{
        height: Dimensions.get('window').height/47,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxBotton3:{
        height: Dimensions.get('window').height/3,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    logo:{
        width: 50,
        height: 50,
        top: -110,
    },

    setaEsquerda: {
        width: 24,
        height: 24,
        marginRight: 10, // Ajuste conforme necessário
      },
      setaDireita: {
        width: 24,
        height: 24,
        marginLeft: 10, // Ajuste conforme necessário
      },


    button1: {
        width: 237,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row",
        top: -52,
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        paddingHorizontal: 10,
        gap: 10,
        
    },

    buttonHorarios: {
        width: 254,
        height: 305, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        top: -30,
        
        gap: 10,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 1,
    },

    buttonVoltar: {
        width: 50,
        height: 50, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 50,
        right: 140,
        top: -115,
        gap: 10,    
    },

    Voltar: { 
        width: 25, 
        height: 38, 
    },


    textMsgHorarios:{
        fontSize: 14,
        width: 220,
        height: 50,
        top: -22,
        fontWeight: 400,
        justifyContent: `center`,
        alignItems: `center`,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    textAgendamentos:{
        fontSize: 18,
        width: 179,
        top: 32,
        height: 30,
        left: 10,
        fontWeight: 400,
        justifyContent: `center`,
        alignItems: `center`,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    linhaCima:{
        width: 330,
        height: 100,
        top: -120
    },

    linhaBaixo:{
        width: 334,
        height: 100,
        left: 85,
        justifyContent: `center`,
        alignItems: `center`,
        top: -35,
    },
    
    linhaMeio:{
        width: 330,
        height: 100,
        top: -235,
    },

    
    buttonAgendar: {
        width: 200,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -68,
        left: 13,
        gap: 10,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 0.5,
    },

    agendarText:{
        fontSize: 14,
        width: 190,
        height: 25,
        justifyContent: `center`,
        alignItems: `center`,
        right: 115, 
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    confirmaAgendamento:{
        fontSize: 17,
        width: 390,
        height: 59,
        left: 80,
        justifyContent: `center`,
        alignItems: `center`,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    confirma:{
        color: themes.colors.primary,
        fontSize: 18,
        width: 30,
        height: 55,
        top: 5,
        left: 6,
        justifyContent: `center`,
        alignItems: `center`, 
        fontWeight: 400,
        fontFamily: themes.fonts.main
    },

    verificado:{
        top: 43,
        width: 55, 
        height: 55, 
        borderRadius: 30,
    },

    modalOverlay:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.colors.transparency,
    },

    modalButton:{
        backgroundColor: themes.colors.secondary,
        padding: 10,
        width: 65,
        height: 65,
        top: 160,
        borderRadius: 40,
    },

    modalContent:{
        width: "80%",
        padding: 20,
        backgroundColor: themes.colors.secondary,
        borderRadius: 10,
        alignItems: "center",
    },

    spaceCalendar:{
        backgroundColor: themes.colors.transparency, 
        width: 200, 
        height: 100,
        top: -400,
        color: themes.colors.primary,
        fontSize: 18,
        justifyContent: `center`,
        alignItems: `center`, 
        fontWeight: 400,
        fontFamily: themes.fonts.main
    },

    calendarHeaderStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: themes.colors.transparency,
        marginBottom: 10,
        width: 300,
    },

    textDayStyle: { 
        color: themes.colors.secondary,
        fontFamily: themes.fonts.main, // Certifique-se de que isso está correto
      },


}); 


// Tema do calendário (não é um estilo do React Native, mas sim uma configuração)
export const calendarTheme = {
    fontFamily: themes.fonts.main,
    textMonthFontSize: 18,
    textMonthFontWeight: 'bold',
    textMonthColor: themes.colors.fontEspecial,
    todayTextColor: themes.colors.secondary,
    selectedDayBackgroundColor: themes.colors.primary,
    selectedDayTextColor: themes.colors.secondary,
    arrowColor: themes.colors.primary,
    calendarBackground: themes.colors.bgscreen,
    textDayHeaderFontSize: 14,
    textDayHeaderFontWeight: 'bold',
    textDayHeaderColor: themes.colors.primary,
    textDayFontSize: 14,
    textDayFontWeight: 'normal',
    textDayColor: themes.colors.primary,
    textDisabledColor: themes.colors.shadow,
    arrowStyle: {
        color: themes.colors.secondary,
        margin: 0,
        padding: 0,
    },
};
