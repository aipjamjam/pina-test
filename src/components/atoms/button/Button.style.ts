import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.g400,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: colors.g900,
    },
});
