import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};
  return (
    <View>
      <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        />
    </View>
  )
}