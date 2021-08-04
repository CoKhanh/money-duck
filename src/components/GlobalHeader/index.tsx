import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


const GlobalHeader = (props: any) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={props.title} titleStyle={styles.content}/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    content: {
        marginLeft: 'auto', marginRight: 'auto',
    },
})

export default GlobalHeader;