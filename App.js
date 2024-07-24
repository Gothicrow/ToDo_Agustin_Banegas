import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Landing from './Screens/Landing';
import Home from './Screens/Home';
import { colors } from './Global/colors';
import Settings from './Screens/Settings';
import Details from './Screens/Details';
import Form from './Screens/Form';
import Navigator from './Navigation/Navigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigator /> */}
      <Landing />
      {/* <Home /> */}
      {/* <Details/> */}
      {/* <Form /> */}
      {/* <Settings/> */}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors["blue"].color4,
    paddingTop: 25
  },
});
