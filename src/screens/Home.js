import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

//my Components
import Header from '../components/Header';
import Card from '../components/Card';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}
