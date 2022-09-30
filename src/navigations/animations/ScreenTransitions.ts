import {TransitionPresets} from '@react-navigation/stack';
import CardOverlay from './CardOverlay';
import Interpolators from './Interpolators';
import {FadeIn, FadeOut} from './TransitionSpecs';

export default {
    modal: {
        presentation: 'transparentModal',
        gestureEnabled: false,
        transitionSpec: {
            open: FadeIn,
            close: FadeOut,
        },
        cardStyleInterpolator: Interpolators.forFade,
        headerStyleInterpolator: Interpolators.forFade,
        cardOverlayEnabled: true,
        cardOverlay: CardOverlay,
    },
    bottomsheet: {
        ...TransitionPresets.BottomSheetAndroid,
        gestureEnabled: true,
        gestureDirection: 'vertical',
        presentation: 'transparentModal',
        cardOverlayEnabled: true,
        cardOverlay: CardOverlay,
    },
};
