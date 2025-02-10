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

    logo:{
        width: 100,
        height: 100,
        top: 281,
    },

    button1: {
        width: 237,
        height: 45, 
        alignItems: `center`,
        top: -82,
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        padding: 10,
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },

    button2: {
        width: 237,
        height: 45, 
        alignItems: `center`,
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -323,
        padding: 10,
        gap: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },

    textButton1:{
        fontSize: 14,
        width: 139,
        height: 25,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: 'Jaro-Regular',
    },

    textButton2:{
        fontSize: 14,
        width: 159,
        height: 25,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: 'Jaro-Regular',
    }
}); 