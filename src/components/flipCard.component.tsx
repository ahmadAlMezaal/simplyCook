import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { useSafeState } from '../hooks/useSafeState.hook';

type Props = {
    backComponent: JSX.Element;
    frontComponent: JSX.Element;
}

export const FlipCard: React.FC<Props> = (props) => {

    const [isFlipped, setIsFlipped] = useSafeState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const frontInterpolate = animatedValue.interpolate(
        {
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        }
    );
    const backInterpolate = animatedValue.interpolate(
        {
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg'],
        }
    );

    const frontAnimatedStyle = {
        transform: [{ rotateY: frontInterpolate }],
    };

    const backAnimatedStyle = {
        transform: [{ rotateY: backInterpolate }],
    };

    const flipCard = () => {
        if (isFlipped) {
            Animated.spring(
                animatedValue,
                {
                    toValue: 0,
                    friction: 8,
                    tension: 10,
                    useNativeDriver: true,
                }
            ).start();
        } else {
            Animated.spring(
                animatedValue,
                {
                    toValue: 180,
                    friction: 8,
                    tension: 10,
                    useNativeDriver: true,
                }
            ).start();
        }
        setIsFlipped(!isFlipped);
    };

    return <Pressable onPress={flipCard}>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            {props.frontComponent}
        </Animated.View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
            {props.backComponent}
        </Animated.View>
    </Pressable>;
};

const styles = StyleSheet.create(
    {
        flipCard: {
            // alignItems: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'blue',
            backfaceVisibility: 'hidden',
        },
        flipCardBack: {
            // backgroundColor: 'red',
            position: 'absolute',
            top: 0,
        },
    }
);
