import { View, Text, useColorScheme, SafeAreaView, StatusBar } from 'react-native'
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Imports files
import { styles } from './Login.styles';
import Header from '../general/Header';

export default function Login() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.content]}>
        <Header/>
        <View style={backgroundStyle}>
        <Text style={{color: 'red'}}>Login</Text>
        </View>
    </SafeAreaView>
  )
}