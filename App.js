import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palettes } from './src/Global/palettes';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigator />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: palettes["blue"].color4
  },
});
