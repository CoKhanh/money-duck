import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { connect, useDispatch } from 'react-redux';
import { onSetUpRedux } from '../../state/auth/action';

import Colors from '../../theme/Color';

import { State } from '../../state/types';

const Home = (props: State) => {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Home Page</Text>
            <FontAwesomeIcon icon={faHome} color={Colors.pastelPink} size={24}/>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {
    onSetUpRedux,
})(Home);