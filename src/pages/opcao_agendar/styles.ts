import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: themes.colors.bgscreen,
  },

  boxTop: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },

  logo: {
    width: 45,
    height: 45,
  },

  linhaCima: {
    width: "90%",
    position: "absolute",
    height: 1.1,
    backgroundColor: themes.colors.primary,
    top: 50,
  },

  boxCalendar: {
    width: "100%",
    alignItems: "center",
  },
  
  calendar: {
    width: 360,
  },

  arrowContainer: {
    backgroundColor: themes.colors.secondary,
    borderRadius: 15,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  linhaMeio: {
    width: "115%",
    left: -22,
    top: -60,
    position: "absolute",
    height: 1,
    backgroundColor: themes.colors.primary,
  },

  linhaBaixo: {
    width: "90%",
    height: 1.1,
    position: "absolute",
    backgroundColor: themes.colors.primary,
    top: -24,
  },

  textHorarios: {
    fontSize: 18,
    fontWeight: "400",
    color: themes.colors.primary,
    fontFamily: themes.fonts.main,
    top: -20,
    marginTop: 25,
  },

  horariosContainer: {
    width: "100%",
    top: -45,
    alignItems: "center",
    padding: 20,
  },

  horariosGrid: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  buttonHorarios: {
    width: "48%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.secondary,
    borderRadius: 30,
    top: -30,
    marginBottom: 25,
    elevation: 4,
  },

  buttonHorariosSelected: {
    backgroundColor: themes.colors.primary,
  },

  textMsgHorarios: {
    fontSize: 18,
    fontFamily: themes.fonts.main,
    color: themes.colors.primary,
  },

  textMsgHorariosSelected: {
    color: themes.colors.fontEspecial,
  },

  boxAgendamento: {
    bottom: 50,
    width: "100%",
    alignItems: "center",
    paddingBottom: 5,
    backgroundColor: themes.colors.bgscreen,
  },

  buttonAgendar: {
    width: 220,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.secondary,
    top: -10,
    left: 23,
    borderRadius: 30,
    elevation: 4,
  },

  agendarText: {
    fontSize: 20,
    color: themes.colors.primary,
    fontFamily: themes.fonts.main,
  },

  buttonVoltar: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.secondary,
    borderRadius: 30,
    marginRight: 10,
    top: -55,
    right: 124,
    elevation: 4,
  },

  Voltar: {
    width: 25,
    height: 38,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.colors.transparency,
  },

  modalContent: {
    width: "80%",
    backgroundColor: themes.colors.secondary,
    borderRadius: 30,
    padding: 20,
    height: 250,
    alignItems: "center",
  },

  confirmaAgendamento: {
    fontSize: 20,
    color: themes.colors.primary,
    fontFamily: themes.fonts.main,
    marginBottom: 20,
    textAlign: "center",
  },

  verificado: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },

  modalButton: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.secondary,
    borderRadius: 30,
    marginTop: 120,
  },

  confirma: {
    fontSize: 20,
    color: themes.colors.primary,
    fontFamily: themes.fonts.main,
  },

});

export const calendarTheme = {
  calendarBackground: themes.colors.bgscreen,
  textSectionTitleColor: themes.colors.primary,
  selectedDayBackgroundColor: themes.colors.primary,
  selectedDayTextColor: themes.colors.fontEspecial,
  todayTextColor: themes.colors.primary,
  dayTextColor: themes.colors.primary,
  arrowColor: themes.colors.primary,
  monthTextColor: themes.colors.primary,
  textDayFontFamily: themes.fonts.podkova,
  textMonthFontFamily: themes.fonts.main,
  textDayHeaderFontFamily: themes.fonts.podkova,
  textDayHeaderColor: themes.colors.secondary,
  textDayFontSize: 16,
  textMonthFontSize: 20,
  textDayHeaderFontSize: 15,
  arrowStyle: {
    margin: 0,
    padding: 0,
  }
};