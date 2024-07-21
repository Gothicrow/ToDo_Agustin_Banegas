import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Screens/Landing';
import Home from './Screens/Home';
import { colors } from './Global/colors';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Landing /> */}
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.color4,
    alignItems: 'center',
    paddingTop: 25
  },
});
