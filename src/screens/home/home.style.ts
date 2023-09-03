import {
  Dimensions,
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Colors from '../../assets/colors';
const {StatusBarManager} = NativeModules;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors._primaryBackgroundColor,
    height:
      Dimensions.get('window').height -
      (Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight),
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors._primaryTextColor,
    padding: 10,
  },
});

export default Styles;
