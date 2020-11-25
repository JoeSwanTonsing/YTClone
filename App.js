import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

//My Components
import Home from './src/screens/Home';
import Search from './src/screens/Search';
// <Home />
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Search />
    </SafeAreaView>
  );
}
