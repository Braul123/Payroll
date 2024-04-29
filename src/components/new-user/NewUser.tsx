
import { 
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    TextInput,
    Image
} from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './NewUser.styles';


export default function NewUser() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const colorTex ={ color:  isDarkMode ? Colors.lighter : Colors.darker}

    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [password, setPassword] = useState('');

    return (
    <SafeAreaView style={[backgroundStyle, styles.content]}>
            <View style={styles.form}>
                <Image source={require('../../assets/icons/person-add.svg')}/>
                <Text style={colorTex}>NewUser hola</Text>
                <TextInput style={[styles.input, colorTex]} placeholder="Nombre"/>
            </View>
    </SafeAreaView>
    )
}