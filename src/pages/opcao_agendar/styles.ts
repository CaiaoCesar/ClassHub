import { Button, Dimensions, StyleSheet } from "react-native";
import {themes} from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

    boxTop: {
        height: Dimensions.get('window').height / 1,
        width: '100%',
        backgroundColor: themes.colors.bgscreen,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxCalendar: {
        height: Dimensions.get('window').height / 45,
        width: '100%',
        alignItems: 'center',
        backgroundColor: themes.colors.bgscreen,
        justifyContent: 'center',
    },

    boxAgendamento: {
        height: Dimensions.get('window').height / 6,
        width: '100%',
        alignItems: 'center',
        backgroundColor: themes.colors.bgscreen,
        justifyContent: 'center',
    },

    horariosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: themes.colors.bgscreen,
        top: -85,
        marginTop: 20,
        marginBottom: 20,
        margin: 20,
        padding: 20,
    },

    textHorarios: {
        fontSize: 15,
        height: 30,
        fontWeight: '400',
        top: -178,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main,
    },

    buttonHorarios: {
        width: '48%', // 2 colunas com um pequeno espaço entre elas
        height: '20%', // Altura ajustada
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.bgscreen,
        borderRadius: 30,
        top: 295,
        marginBottom: 10, // Espaço entre as linhas
    },
    
    textMsgHorarios: {
        fontSize: 14,
        fontWeight: '400',
        color: themes.colors.primary,
        fontFamily: themes.fonts.main,
    },

    boxBotton3:{
        height: Dimensions.get('window').height/3,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    logo:{
        width: 35,
        height: 35,
        top: -60,
    },

    setaEsquerda: {
        width: 70,
        height: 70,
        top: 10,
        marginRight: -10, // Ajuste conforme necessário
      },

    setaDireita: {
        width: 70,
        height: 70,
        top: 10,
        marginLeft: -10, // Ajuste conforme necessário
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

    buttonVoltar: {
        width: 50,
        height: 50, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 50,
        right: 120,
        top: -235,
        gap: 10,    
    },

    Voltar: { 
        width: 25, 
        height: 38, 
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
        top: -35,
        zIndex: 1,
    },

    linhaBaixo:{
        width: 334,
        height: 100,
        left: 65,
        justifyContent: `center`,
        alignItems: `center`,
        top: -35,
    },
    
    linhaMeio:{
        width: 330,
        height: 100,
        top: -190,
    },

    
    buttonAgendar: {
        width: 200,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -188,
        left: 33,
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
        width: "100%", 
        height: 200,
        top: -330,
        color: themes.colors.primary,
        fontSize: 14,
        marginTop: 20, 
        justifyContent: 'center',
        alignItems: 'center', 
        fontWeight: 400,
        fontFamily: themes.fonts.main
    },

    calendarHeaderStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: themes.colors.transparency,
        marginBottom: 10,
        height: "45%", 
        width: 300,
        fontFamily: themes.fonts.main,
    },

    textDayStyle: { 
        color: themes.colors.secondary,
        fontFamily: themes.fonts.main, // Certifique-se de que isso está correto
      },
}); 


// Tema do calendário (não é um estilo do React Native, mas sim uma configuração)
export const calendarTheme = {
    fontFamily: themes.fonts.main, // Fonte principal
    textMonthFontSize: 14, // Tamanho da fonte do mês
    textMonthFontWeight: 400, // Peso da fonte do mês
    textMonthColor: themes.colors.primary, // Cor do texto do mês
    todayTextColor: themes.colors.secondary, // Cor do texto do dia atual
    selectedDayBackgroundColor: themes.colors.primary, // Cor de fundo do dia selecionado
    selectedDayTextColor: themes.colors.fontEspecial, // Cor do texto do dia selecionado
    arrowColor: themes.colors.primary, // Cor das setas
    calendarBackground: themes.colors.bgscreen, // Cor de fundo do calendário
    textDayHeaderFontSize: 14, // Tamanho da fonte dos dias da semana
    textDayHeaderFontWeight: 'bold', // Peso da fonte dos dias da semana
    textDayHeaderColor: themes.colors.primary, // Cor dos dias da semana
    textDayFontSize: 14, // Tamanho da fonte dos dias
    textDayFontWeight: 'normal', // Peso da fonte dos dias
    textDayColor: themes.colors.primary, // Cor dos dias
    textDisabledColor: themes.colors.shadow, // Cor dos dias desabilitados
    textDayFontFamily: themes.fonts.main, // Fonte para os dias
    textMonthFontFamily: themes.fonts.main, // Fonte para o mês
    textDayHeaderFontFamily: themes.fonts.main, // Fonte para os dias da semana
    arrowStyle: {
        margin: 10,
        padding: 10,
    },
};