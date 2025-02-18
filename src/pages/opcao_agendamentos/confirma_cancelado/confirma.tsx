import React, {useState} from "react"; 
import {Text, View, TouchableOpacity} from "react-native"; 
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../@types/types";

import {themes} from "../../../global/themes";
import {style} from "../styles";

/*
export default function Confirmacao() {
const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

  }
  */