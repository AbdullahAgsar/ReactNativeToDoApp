import React from 'react';
import {ToDoItem, ToDoValues} from './ToDoItem';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useAppSelector} from '../redux/hooks/hooks';
import {_getTodos} from '../redux/state/toDo';

const ToDoList = () => {
  const todoList = useAppSelector(_getTodos);
  const renderItem = ({item}: {item: ToDoValues}) => {
    return <ToDoItem todo={item} />;
  };

  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todoList.filter((item, index) => index % 2 === 0)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        style={styles.flatList}
      />

      <FlatList
        data={todoList.filter((item, index) => index % 2 === 1)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todosContainer: {
    paddingHorizontal: 25,
    marginVertical: 12,
    flexDirection: 'row',
    gap: 18,
  },
  flatList: {
    width: Dimensions.get('window').width / 2 - 34,
  },
});

export {ToDoList};
