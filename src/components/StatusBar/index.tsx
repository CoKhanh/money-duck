import React from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const _StatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: StatusBar.currentHeight,
    }
});

export default _StatusBar;