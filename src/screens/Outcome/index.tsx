import React from 'react';
import { Button, Text, View } from 'react-native';

import { connect, useDispatch } from 'react-redux';
import { onSetUpRedux } from '../../state/auth/action';

import { State } from '../../state/types';

import GlobalHeader from '../../components/GlobalHeader';

const Outcome = (props: State) => {
    const dispatch = useDispatch();

    return (
        <View>
            <GlobalHeader title='Outcome'/>
            <Text>Outcome Page</Text>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {
    onSetUpRedux,
})(Outcome);