import calcAge from '../resource/age'
let initState = {
            sex: '',
            age: '',
            weight: '',
            height: '',
            creatinine: ''
        }

const patientFeatures = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_FHIR_SUCCESS':
            if(action.payload.fhirResources.type === 'patient'){
                state.sex = action.payload.fhirResources.resource.gender
                state.age = calcAge(action.payload.fhirResources.resource.birthDate)
            }
            if(action.payload.fhirResources.type === 'weight'){
                state.weight = action.payload.fhirResources.resource.entry[0].resource.valueQuantity.value
            }
            if(action.payload.fhirResources.type === 'height'){
                state.height = action.payload.fhirResources.resource.entry[0].resource.valueQuantity.value
            }
            return state
         default:
            return state
    }
}

export default patientFeatures

