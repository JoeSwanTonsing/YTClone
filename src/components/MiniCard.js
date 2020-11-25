import React from 'react';
import {View, Text, Image} from 'react-native';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_imfxrJ7BAESi7hATjiJ5Q&maxResults=30&q=sunday&key=AIzaSyDqrTNLt0BchieTOXKozxk_80mHM210upE

const MiniCard = ({videoId, title}) => {
  return (
    <View style={{flex: 1, padding: 15, borderBottomColor: '#e6e6e6', borderBottomWidth: 1, marginBottom: 5}}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        }}
        style={{width: '100%', height: 250}}
      />
      <Text style={{fontSize: 16,  paddingVertical: 10, fontWeight: 'bold'}} numberOfLines={3} ellipseMode="tail">
        {title}
      </Text>
    </View>
  );
};

export default MiniCard;
