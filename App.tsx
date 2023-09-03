import React from 'react';
import {Home} from './src/screens/home';
import {
  StatusBar,
  StyleSheet,
  Platform,
  NativeModules,
  View,
} from 'react-native';
import Colors from './src/assets/colors';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
const {StatusBarManager} = NativeModules;

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors._primaryStatusBarBackgroundColor,
    paddingTop: Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight,
  },
});

export default App;
