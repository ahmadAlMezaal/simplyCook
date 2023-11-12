import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {

    return <View style={styles.container}>
        <Text>Hello world!</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);

export default App;
