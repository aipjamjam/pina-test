import {Platform, StatusBar, StyleSheet} from 'react-native';

const padding = 16;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: padding,
        paddingTop:
            Platform.OS === 'ios' ? padding + 36 : StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
