
const initialState = {}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'REGISTER_ACTION':
            return action.payload
        case 'LOGOUT':
            return initialState
        default:
            return state
    }

}