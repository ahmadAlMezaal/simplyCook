import { ReactElement, useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import { useSafeState } from '../hooks/useSafeState.hook';

type Props = {
    front: ReactElement;
    back: ReactElement;
};

export const FlippableCard: React.FC<Props> = (props) => {

    const flipAnimation = useRef(new Animated.Value(0)).current;
    const [isFlipped, setIsFlipped] = useSafeState(false);

    const frontAnimatedStyle = {
        transform: [
            {
                rotateY:
                    flipAnimation.interpolate(
                        {
                            inputRange: [0, 180],
                            outputRange: ['0deg', '180deg']
                        }
                    )
            },
        ],
    };

    const backAnimatedStyle = {
        transform: [
            {
                rotateY: flipAnimation.interpolate(
                    {
                        inputRange: [0, 180],
                        outputRange: ['180deg', '360deg']
                    }
                )
            },
        ],
    };

    const flipCard = () => {
        if (isFlipped) {
            Animated.spring(
                flipAnimation,
                {
                    toValue: 0,
                    friction: 8,
                    tension: 10,
                    useNativeDriver: true,
                }
            ).start();
        } else {
            Animated.spring(
                flipAnimation,
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

    return <View>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
            <Pressable onPress={flipCard}>
                {props.front}
            </Pressable>
        </Animated.View>
        <Animated.View style={[styles.card, backAnimatedStyle, styles.cardBack]}>
            <Pressable onPress={flipCard}>
                {props.back}
            </Pressable>
        </Animated.View>
    </View>;
};

const styles = StyleSheet.create(
    {
        card: {
            backfaceVisibility: 'hidden',
        },
        cardBack: {
            position: 'absolute',
            top: 0,
        },
    }
);
