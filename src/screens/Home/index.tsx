import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { connect, useDispatch } from 'react-redux';
import { onSetUpRedux } from '../../state/auth/action';

import Colors from '../../theme/Color';
import ContainerStyles from '../../styles/ContainerStyle';
import CardStyle from '../../styles/CardStyle';

import { State } from '../../state/types';

import GlobalHeader from '../../components/GlobalHeader';

const Home = (props: State) => {
    const dispatch = useDispatch();

    return (
        <View style={ContainerStyles.container}>
            <GlobalHeader title='Home' />
            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <View style={CardStyle.chart}>

                </View>
                <View style={CardStyle.detail}>

                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {
    onSetUpRedux,
})(Home);