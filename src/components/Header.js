import React from 'react';
import {View, Text} from 'react-native';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        elevation: 4, //shadow for Android
        shadowOffset: {width: 0, height: 2}, //shadow for iOS
        shadowColor: 'black', //shadow for iOS
        shadowOpacity: 0.3, //shadow for iOS
      }}>
      <View style={{justifyContent: 'center'}}>
        <Text>YouTube</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Search</Text>
      </View>
    </View>
  );
}
