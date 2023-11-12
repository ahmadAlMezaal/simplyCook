import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export const SimplyCookButton: React.FC<Props> = (props) => {

    return <Pressable
        disabled={props.disabled}
        onPress={props.onPress}
        style={[styles.container, props.containerStyle]}>
        <Text style={styles.title}>{props.title}</Text>
    </Pressable>;
};

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: colors.primary,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
        },
        title: {
            color: 'white',
            fontWeight: 'bold',
        }
    }
);
