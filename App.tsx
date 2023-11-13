import 'react-native-gesture-handler';
import { MainStack } from '#navigation/mainStack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppProvider } from './src/context/providers/app.provider';

const App: React.FC = () => {

    return <AppProvider>
        <View style={styles.container}>
            <MainStack />
        </View>
    </AppProvider>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);

export default App;
