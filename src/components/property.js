import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.white,
      },
      titleText: {
        fontWeight: 'bold',
      },
})

const PropertyItem  = ({ title, address}) => {
    return(
        <TouchableOpacity onPress={() => {console.log("Clicked")}}>
            <View style={styles.row}>
                <Text style={styles.titleText}>{title}</Text>
                <Text>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PropertyItem;