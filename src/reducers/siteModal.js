
const initState = {
    openClose: 'closed',
    connect: ''
}

export default (state=initState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return action.payload
        default:
            return state
    }

}