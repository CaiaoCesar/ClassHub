import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes"; 


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

    boxBotton1:{
        height: Dimensions.get('window').height/3,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxBotton2:{
        height: Dimensions.get('window').height/2,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxBotton3:{
        height: Dimensions.get('window').height/2,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    logo:{
        width: 100,
        height: 100,
        top: 325,
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
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 5,
    },

    button2: {
        width: 237,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -278,
        
        gap: 10,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 5,
    },

    button3: {
        width: 163,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -418,
        paddingHorizontal: 10,
        gap: 10,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },


    textAgendar:{
        fontSize: 14,
        width: 141,
        gap: 10,
        height: 25,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    textAgendamentos:{
        fontSize: 14,
        width: 141,
        height: 25,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    textLogout:{
        fontSize: 14,
        width: 56,
        height: 25,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    }
}); 
