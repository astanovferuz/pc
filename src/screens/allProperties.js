import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { ListSeparator } from '../components/List';
import PropertyItem from '../components/property';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingVertical: 20,
    },
  });

const propertiesArray = [
    {
        id: 0,
        title: 'Villa 1',
        address: 'Test Street 1',
        is_started: false,
        scheduled_at: {
            time: '00:00',
            humanized: 'in 2 days'
        }
    },
    {
        id: 1,
        title: 'Villa 2',
        address: 'Test Street 1',
        is_started: false,
        scheduled_at: {
            time: '00:00',
            humanized: 'in 2 days'
        }
    },
    {
        id: 2,
        title: 'Apartment 1',
        address: 'Test Street 1',
        is_started: false,
        scheduled_at: {
            time: '00:00',
            humanized: 'in 2 days'
        }
    },
    {
        id: 3,
        title: 'Villa 3',
        address: 'Test Street 1',
        is_started: false,
        scheduled_at: {
            time: '00:00',
            humanized: 'in 2 days'
        }
    }
];

const PropertyList = () => {
    return(
        <FlatList
        style={styles.container}
        data={propertiesArray}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PropertyItem
            title={item.title}
            address={item.address}
            // onPress={() => navigation.dispatch(DrawerActions.jumpTo(item.title, {name: item.target}))}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
    )
}

export default PropertyList;