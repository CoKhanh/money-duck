import React from 'react';
import { Button, Text, View } from 'react-native';

import { connect, useDispatch } from 'react-redux';
import { useDemo } from '../../hooks/useDemo';
import { onSetUpRedux } from '../../state/auth/action';

import { State } from '../../state/types';

const ReduxExample = (props: State) => {
    const dispatch = useDispatch();

    const showState = () => {
        //get state
        // console.log(props.auth);

        //use custom hook
        // const demo = useDemo();
        // console.log('demo: ', demo)
    }

    React.useEffect(()=>{
        console.log('here');
    },[])

    return (
        <View>
            <Text style={{fontSize: 100, color: "red"}}>Hello Redux</Text>
            <Button title="Foo" onPress={showState}/>
            <Button title="Tap" onPress={()=>{
                dispatch(onSetUpRedux(1));
            }}/>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {
    onSetUpRedux,
})(ReduxExample);