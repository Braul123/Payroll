
import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './NewUser.styles';
import AddUserIcon from '../../assets/icons/addUserIcon';
import { schemaColors } from '../../services/utils';

export default function NewUser() {
    const isDarkMode = useColorScheme() === 'dark';
    const colorsMode = schemaColors;
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const colorTex = { color: isDarkMode ? Colors.lighter : Colors.darker }
    const borderColor = { borderColor: isDarkMode ? Colors.lighter : Colors.darker }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={[backgroundStyle, styles.content]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <View style={styles.form}>
                        <View style={styles.sectionIcon}>
                            <AddUserIcon width={200} height={200} stroke={isDarkMode ? Colors.lighter : colorsMode.primary}/>
                        </View>
                        <View style={styles.sectionFormInput}>
                            <Text style={[colorTex, styles.textSpan]}>Nombre de usuario</Text>
                            <TextInput style={[styles.input, colorTex, borderColor]}
                            placeholderTextColor={isDarkMode ? colorsMode.placeHolderDarkMode : colorsMode.placeHoldderLightMode}
                            placeholder="Ingrese su nombre" />
                        </View>
                        <View style={styles.sectionFormInput}>
                            <Text style={[colorTex, styles.textSpan]}>Crear contraseña</Text>
                            <TextInput style={[styles.input, colorTex, borderColor]}
                            placeholderTextColor={isDarkMode ? colorsMode.placeHolderDarkMode : colorsMode.placeHoldderLightMode}
                            placeholder="Ingrese una contraseña" />
                        </View>
                        <View>
                            <TouchableOpacity style={[styles.button, {backgroundColor: colorsMode.primary}]}>
                                <Text style={styles.textButton}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

            <View style={styles.contentEclipse}>
                <View style={[styles.eclipseTop, {backgroundColor: isDarkMode ? colorsMode.secondaryColorDarkMode : colorsMode.secondaryColorLightMode}]}></View>
                <View style={[styles.eclipseBottom, {backgroundColor: isDarkMode ? colorsMode.secondaryColorDarkMode : colorsMode.secondaryColorLightMode}]}></View>
                <View style={[styles.eclipseCenter, {backgroundColor: isDarkMode ? colorsMode.secondaryColorDarkMode : colorsMode.secondaryColorLightMode}]}></View>
            </View>
        </SafeAreaView>
    )
}