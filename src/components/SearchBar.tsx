import {StyleSheet, View, TextInput} from 'react-native';
import {Search} from '../assets/pictures/pictures';
import React, {FC} from 'react';
import Colors from '../assets/colors';

interface SearchBarInterface {
  iconSize: number;
  inputText: string;
  searchInToDoList: (textValue: string) => void;
}

const SearchBar: FC<SearchBarInterface> = ({
  iconSize,
  inputText,
  searchInToDoList,
}) => {
  return (
    <View style={styles.searchBarContainer}>
      <Search size={iconSize} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for notes"
        onChangeText={searchInToDoList}
        value={inputText}
        placeholderTextColor={Colors._primaryButtonTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors._primaryBorderColor,
    marginHorizontal: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    gap: 12,
  },
  searchInput: {
    color: Colors._primaryTextColor,
  },
});

export {SearchBar};
