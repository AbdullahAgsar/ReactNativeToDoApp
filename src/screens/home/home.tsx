import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  // Dimensions,
  // StatusBar,
  // Platform,
  // NativeModules,
} from 'react-native';
import {Logo} from '../../assets/pictures/pictures';
import {SearchBar} from '../../components/SearchBar';
import Styles from './home.style';
import React, {useState} from 'react';
import {AddToDoButtons} from '../../components/buttons/addToDoButton';
import {ToDoCategoriesContainer} from '../../components/buttons/toDoCategoriesButtonsContent';
import {ToDoList} from '../../components/ToDoList';

// const {StatusBarManager} = NativeModules;

export default function Home() {
  const [searchToDoList, setSearchToDoList] = useState<string>('');
  const [addToDoModalVisible, setAddToDoModalVisible] =
    useState<boolean>(false);

  function SearchToDoList(textValue: string) {
    setSearchToDoList(textValue);
  }

  function ToggleAddToDoModalVisible() {
    setAddToDoModalVisible(!addToDoModalVisible);
  }

  return (
    <View style={[Styles.container]}>
      <AddToDoButtons iconSize={20} addToDo={ToggleAddToDoModalVisible} />

      <View style={styles.locoContainer}>
        <Logo size={96} />
      </View>

      <SearchBar
        iconSize={20}
        inputText={searchToDoList}
        searchInToDoList={SearchToDoList}
      />

      <ToDoCategoriesContainer />

      <ScrollView style={styles.scrollViewContainer}>
        <ToDoList />
      </ScrollView>

      <Text>{searchToDoList}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  locoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  scrollViewContainer: {
    // maxHeight:
    //   Dimensions.get('window').height -
    //   (Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight) -
    //   164,
  },
});
