import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import Login from './src/pages/login';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Jaro-Regular': require('./assets/fonts/Jaro-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Aguarda a fonte carregar antes de exibir a tela
  }

  return <Login />;
}
