import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

export const Loader = ({ isSmall }: { isSmall?: boolean }): JSX.Element => {
    const size = isSmall ? 'small' : 'large';
    return <View style={styles.overlay}>
        <ActivityIndicator style={styles.activityIndicator} color={colors.primary} size={size} />
    </View>;
};

const styles = StyleSheet.create(
    {
        overlay: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 9999,
            elevation: 9999,
        },
        activityIndicator: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.25)',
            width: '100%',
        }
    }
);
