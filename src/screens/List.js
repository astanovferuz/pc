import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const screens = [
  {
    title: 'All Properties',
    subtitle: 'Click here to see all properties',
    target: 'All Properties',
  },
  // {
  //   title: 'Add new property',
  //   subtitle: 'Click here to add a new property',
  //   target: 'Add new property',
  // },
  // {
  //   title: 'Button',
  //   subtitle: 'An example of using the Button.js components.',
  //   target: 'ButtonDemo',
  // },
];

export const List = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={screens}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => navigation.dispatch(DrawerActions.jumpTo(item.title, {name: item.target}))}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
  );
};
