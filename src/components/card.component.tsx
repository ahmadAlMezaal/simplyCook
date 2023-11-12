import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
    children: React.ReactNode;
    style?: ViewStyle
}

export const Card: React.FC<Props> = (props) => {
    return <View style={[styles.container, props.style]}>
        {props.children}
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
        }
    }
);
