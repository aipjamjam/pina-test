import {Easing} from 'react-native-reanimated';

export const FadeIn = {
    animation: 'timing',
    config: {
        duration: 350,
        easing: Easing.out(Easing.poly(5)),
    },
};

export const FadeOut = {
    animation: 'timing',
    config: {
        duration: 150,
        easing: Easing.in(Easing.linear),
    },
};
