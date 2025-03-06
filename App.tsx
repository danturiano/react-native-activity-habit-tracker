import AppContainer from 'components/AppContainer';
import Header from 'components/Header';
import Seperator from 'components/Seperator';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

import './global.css';

export default function App() {
  return (
    <ScrollView className="mx-8 my-20">
      <AppContainer>
        <Header />
        <Seperator />
      </AppContainer>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
