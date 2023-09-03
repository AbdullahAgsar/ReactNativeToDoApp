import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {ToDoCategoryItem} from './toDoCategoriesButtons';
import {useAppSelector} from '../../redux/hooks/hooks';
import {_getCategories} from '../../redux/state/toDo';

const ToDoCategoriesContainer = () => {
  const categories = useAppSelector(_getCategories);
  const renderItem = ({item}: {item: string}) => (
    <ToDoCategoryItem category={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingHorizontal: 25,
    marginVertical: 12,
  },
});

export {ToDoCategoriesContainer};
