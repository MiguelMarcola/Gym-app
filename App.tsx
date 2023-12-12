import { Text, View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Box, NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { Signin } from '@screens/Signin';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Signin /> : <Loading /> }
    </NativeBaseProvider>
  );
}