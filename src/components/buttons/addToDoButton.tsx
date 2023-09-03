import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Plus} from '../../assets/pictures/pictures';
import Colors from '../../assets/colors';

interface AddToDoButtonInterface {
  iconSize: number;
  addToDo: () => void;
}

const AddToDoButtons: FC<AddToDoButtonInterface> = ({iconSize, addToDo}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.6}
      onPress={addToDo}
    >
      <Plus size={iconSize} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors._primaryAddToDoButtonColor,
    width: 61,
    height: 61,
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export {AddToDoButtons};
