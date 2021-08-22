import React from 'react';
import { Dimensions, View } from 'react-native';
import {
    PieChart
} from "react-native-chart-kit";

import { connect, useDispatch } from 'react-redux';
import { onSetUpRedux } from '../../state/auth/action';

import { State } from '../../state/types';

import GlobalHeader from '../../components/GlobalHeader';

const Income = (props: State) => {
    const dispatch = useDispatch();

    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ];

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const screenWidth = Dimensions.get("window").width;

    return (
        <View>
            <GlobalHeader title='Income'/>
            <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 20]}
                absolute
            />
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {
    onSetUpRedux,
})(Income);