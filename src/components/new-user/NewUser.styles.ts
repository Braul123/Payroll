
import { Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    content: {
        padding: 20,
        flex: 1
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    },
    sectionIcon: {
        marginBottom: 40
    },
    sectionFormInput: {
        width: '100%',
        padding: 14,
        flexDirection: 'column',
        gap: 14,

    },
    textSpan: {
        fontWeight: 600,
        fontSize: 16
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        width: '100%',
    },
    button: {
        height: 50, 
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 40
    },
    textButton: {
        fontSize: 16,
        fontWeight: 700,
        color: '#FFFFFF'
    },
    contentEclipse: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: -1
    },
    eclipseTop: {
        height: 600,
        width: 600,
        borderRadius: 300,
        position: 'absolute',
        left: 150,
        top: -300
    },
    eclipseBottom: {
        height: 600,
        width: 600,
        borderRadius: 300,
        position: 'absolute',
        left: -300,
        bottom: -300
    },
    eclipseCenter: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        left: -50,
        bottom: Dimensions.get('window').height / 2
    }
})