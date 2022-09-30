import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        maxHeight: '90%',
    },
    header: {
        padding: 16,
        paddingVertical: 8,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: colors.g800,
    },
    strip: {
        height: 4,
        backgroundColor: colors.g400,
        width: '30%',
        alignSelf: 'center',
        margin: 8,
    },
});
