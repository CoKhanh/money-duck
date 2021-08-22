import React from 'react';
import { Text, View } from 'react-native';
import { FormattedNumber } from 'react-intl';
import BaseStyle from '../../styles/BaseStyle';

const FormatNumber = (props: any) => {
    const { description, containerStyle, value, colorDescription } = props;
    return (
        <View style={[containerStyle, BaseStyle.flexDirectionRow]}>
            {description ?
                <Text style={[{ color: colorDescription}, BaseStyle.mr5]}>
                    {description}:
                </Text>
                : null
            }
            <Text>
                <FormattedNumber value={value} style="currency" currency="VND" />
            </Text>
        </View>
    )
}

export default FormatNumber;