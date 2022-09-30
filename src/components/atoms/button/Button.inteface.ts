import {ViewStyle} from 'react-native';

export interface buttonProps {
    label?: string;
    onPress?: () => void;
    type?: 'default' | 'btn-text' | 'btn-icon';
    color?: string;
    labelColor?: string;
    disabled?: boolean;
    icon?: string;
    iconSize?: number;
    style?: ViewStyle;
    outStyle?: ViewStyle;
}
