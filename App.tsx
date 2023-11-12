import { HomeScreen } from '#screens/home.screen';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App: React.FC = () => {

    return <View style={styles.container}>
        <HomeScreen />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);

export default App;
