import { View, Text, useColorScheme, SafeAreaView, StatusBar } from 'react-native'
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as RNFS from 'react-native-fs';

// Imports files
import { styles } from './Login.styles';
import Header from '../general/Header';

export default function Login(props: any) {
    const { navigation } = props;

    // Valida el modo del sistema
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // Ruta para el archivo usado como base de datos
    var path = RNFS.DocumentDirectoryPath + '/test.txt';

    console.log('PATH DE NUESTRO DIRECTORIO', path);


    const data = [
        {
            id: 1,
            userName: 'Alex',
            userLastName: 'Rodriguez',
            password: 'Alex200Al',
            data: [
                {
                    date: '28/04/2024'
                }
            ]
        }
    ]


    RNFS.unlink(path).then((data: any) => {
        console.log('ELIMINACION DE DATOS',data);
        
    }).catch((err: any) => {
        console.log('ERROR', err);
        navigation.navigate("NewUser");
    })
    

    //Escribe el archivo
    // RNFS.writeFile(path, JSON.stringify(data), 'utf8')
    //     .then((success: any) => {
    //         console.log('FILE WRITTEN!');
    //     })
    //     .catch((err: any) => {
    //         console.log(err.message);
    //     });


      //Lee un archivo
      RNFS.read(path)
      .then((success: any) => {
          console.log('FILE READ!', success);
      })
      .catch((err: any) => {
          console.log('PROBLEMAS', err);
          if (err.message.indexOf('no such file') !== -1) {
            console.log('NO HAY ARCHIVO PERRO');
            
          }
      });
    return (
        <SafeAreaView style={[backgroundStyle, styles.content]}>
            <Header />
            <View style={backgroundStyle}>
                <Text style={{ color: 'red' }}>Login</Text>
            </View>
        </SafeAreaView>
    )
}