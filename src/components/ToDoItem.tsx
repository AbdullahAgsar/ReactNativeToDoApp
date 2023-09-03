import React, {FC} from 'react';
import {TouchableHighlight, Text, StyleSheet, View} from 'react-native';
import Colors from '../assets/colors';

export interface ToDoValues {
  id: string;
  content: string;
  title: string;
  isCompleted: boolean;
  bgColor: string;
  textColor: string;
  category: string;
  isVisible: boolean;
}
interface ToDoItem {
  todo: ToDoValues;
}

const ToDoItem: FC<ToDoItem> = ({todo}) => {
  return (
    <TouchableHighlight
      style={[
        {backgroundColor: todo.bgColor},
        styles.global,
        todo.isCompleted ? styles.bgCompleted : null,
      ]}
      underlayColor={Colors._primaryAddToDoButtonColorHighlight}
      onLongPress={() => console.log('long press')}>
      <View>
        <Text
          style={[
            styles.title,
            {color: todo.textColor},
            todo.isCompleted ? styles.textCompleted : null,
          ]}>
          {todo.title}
        </Text>
        <Text
          style={[
            styles.content,
            {color: todo.textColor},
            todo.isCompleted ? styles.textCompleted : null,
          ]}>
          {todo.content}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  global: {
    borderRadius: 16,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 18,
    height: 'auto',
    marginBottom: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  content: {
    fontSize: 12,
  },
  bgCompleted: {
    backgroundColor: '#138808',
  },
  textCompleted: {
    color: Colors._primaryTextColorActive,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#575757',
  },
});

export {ToDoItem};
