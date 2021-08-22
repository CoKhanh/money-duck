import React from 'react';
import { Dimensions, View, ScrollView, Text } from 'react-native';
import {
    PieChart
} from "react-native-chart-kit";

import { connect, useDispatch } from 'react-redux';
import { onSetUpRedux } from '../../state/auth/action';

import Colors from '../../theme/Color';
import ContainerStyles from '../../styles/ContainerStyle';
import CardStyle from '../../styles/CardStyle';
import HomeScreenStyle from '../../styles/HomeScreenStyle';

import { State } from '../../state/types';

import GlobalHeader from '../../components/GlobalHeader';
import FormatNumber from '../../components/FormatNumber';
import BaseStyle from '../../styles/BaseStyle';

const Home = (props: State) => {
    const dispatch = useDispatch();

    const data = [
        {
            name: "Income",
            population: 12000000,
            color: Colors.malibu,
            legendFontColor: Colors.gray,
            legendFontSize: 15
        },
        {
            name: "Expense",
            population: 5500000,
            color: Colors.apricot,
            legendFontColor: Colors.gray,
            legendFontSize: 15
        },
    ];

    const chartConfig = {
        backgroundGradientFrom: Colors.heavyMetal,
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: Colors.racingGreen,
        backgroundGradientToOpacity: 0.5,
        color: () => Colors.springGreen,
    };

    const screenWidth = Dimensions.get("window").width - 30;

    return (
        <View style={ContainerStyles.container}>
            <GlobalHeader title='Home' />
            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <View style={CardStyle.chart}>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        center={[5, 10]}
                    />
                    <View style={HomeScreenStyle.moneyDescription}>
                        <FormatNumber 
                            value={12000000}
                            description='Income'
                            colorDescription={Colors.malibu}
                            containerStyle={BaseStyle.mr15}
                        />
                        <FormatNumber 
                            value={5500000}
                            description='Expense'
                            colorDescription={Colors.apricot}
                            containerStyle={null}
                        />
                    </View>
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