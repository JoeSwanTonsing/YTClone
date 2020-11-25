import React from 'react';
import {View, Text, Image} from 'react-native';

const Card = () => {
  return (
    <View style={{paddingBottom: 8}}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        }}
        style={{width: '100%', height: 250}}
      />
      <View style={{padding: 15, backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
          numberOfLines={2}
          ellipseMode="tail">
          Title of the video
        </Text>
      </View>
    </View>
  );
};

export default Card;
