import React, {FC} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import Colors from '../../assets/colors';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {_getActiveCategory, setActiveCategories} from '../../redux/state/toDo';

interface Category {
  category: string;
}

const ToDoCategoryItem: FC<Category> = ({category}) => {
  const activeCategory = useAppSelector(_getActiveCategory);
  const dispatch = useAppDispatch();

  const setActiveCategory = () => {
    dispatch(setActiveCategories(category));
  };

  return (
    <TouchableHighlight
      style={[
        styles.item,
        category === activeCategory ? styles.activeItem : null,
      ]}
      underlayColor={Colors._primaryAddToDoButtonColorHighlight}
      onPress={setActiveCategory}>
      <Text
        style={[
          styles.text,
          category === activeCategory ? styles.activeItemText : null,
        ]}>
        {category}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: Colors._primaryBorderColor,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    color: Colors._primaryAddToDoButtonColor,
  },
  activeItem: {
    backgroundColor: Colors._primaryButtonTextBgColorActive,
  },
  activeItemText: {
    color: 'white',
  },
});

export {ToDoCategoryItem};
