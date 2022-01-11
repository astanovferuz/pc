import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackgroundge, Button } from 'react-native';
import { Text } from './Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 170
  },
  row: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  titleText: {
    fontWeight: 'bold',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.x,
  },
  welcomeLogo: {
    width: '80%',
    height: 100,
    alignSelf:'center',
  },
  welcomeMessage: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20
  },
});

export const ListItem = ({ title, subtitle, onPress = () => null }) => {
  const rowStyles = [styles.row];

  return (
    <View>
      {/* <TouchableOpacity onPress={onPress}>
        <View style={rowStyles}>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </TouchableOpacity> */}
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Welcome to</Text>
        <Image source={require('../../assets/images/propchecklogo.png')} style={styles.welcomeLogo}/>
      </View>
    </View>
  );
};

export const ListSeparator = () => <View style={styles.separator} />;
