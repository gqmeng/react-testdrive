const fhirResources = (state = [] , action) => {

    switch(action.type) {
        case 'fetchFHIRSuccess':
            return action.payload.fhirResources
        default:
            return state
    }
}

export default fhirResources