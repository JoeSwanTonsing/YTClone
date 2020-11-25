import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';

import MiniCard from '../components/MiniCard';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [miniCardData, setMiniCard] = useState([]);
  const fetchData = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_imfxrJ7BAESi7hATjiJ5Q&maxResults=30&order=date&q=${search}&type=video&key=AIzaSyDqrTNLt0BchieTOXKozxk_80mHM210upE`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMiniCard(data.items);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#fff',
          padding: 15,
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: '#d1d1d1',
        }}>
        <Text>B</Text>
        <TextInput
          style={{
            width: '70%',
            paddingHorizontal: 8,
          }}
          onChangeText={(text) => setSearch(text)}
          value={search}
          placeholder="Search"
        />
        <Text onPress={() => fetchData()}>S</Text>
      </View>
      {/*<ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>*/}
      <FlatList
        data={miniCardData}
        renderItem={({item}) => {
          return (
            <MiniCard videoId={item.id.videoId} title={item.snippet.title} />
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
