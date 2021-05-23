const initialState = {
    'status': {
        'isLoading': true
    }
}

const uiReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOADING_START':
            state.status.isLoading = true
            return state
        case 'LOADING_DONE':
            state.status.isLoading = false
            return state
        default:
            return state
    }
}

export default uiReducer
