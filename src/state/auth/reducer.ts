
let initState = {
    name: null
};

export const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'DO_TEST' : {
            return {...state, name: action.payload};
        }
        default:
            return state;
    }
}