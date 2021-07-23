
export const onSetUpRedux = (number: Number) => {
    return (dispatch: any) => {
        dispatch({type: 'DO_TEST', payload: number})
    }
}