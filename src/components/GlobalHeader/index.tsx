import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';


const GlobalHeader = (props: any) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { }} />
            {/* <Appbar.Content title={props.title} style={{ marginLeft: 0 }} titleStyle={{ marginLeft: 0, backgroundColor: 'red', color: 'green' }}/> */}
            {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
            <Appbar.Content
                title={props.title}
                style={styles.content}
                titleStyle={{ alignSelf: 'center' }}
            />
            {/* <Appbar.Action/> */}
        </Appbar.Header>    
    )
}

const styles = StyleSheet.create({
    content: {
        marginLeft: 0, position: 'absolute', left: 0, right: 0, zIndex: -1
    },
})

export default GlobalHeader;