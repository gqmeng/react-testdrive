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
                if(action.payload.fhirResources.resource.gender){
                    state.sex = action.payload.fhirResources.resource.gender
                }
                if(action.payload.fhirResources.resource.birthDate){
                    state.age = calcAge(action.payload.fhirResources.resource.birthDate)
                }
            }
            if(action.payload.fhirResources.type === 'weight' | action.payload.fhirResources.type === 'height'){
               if(action.payload.fhirResources.resource.entry 
                    && action.payload.fhirResources.resource.entry.length>0
                    && action.payload.fhirResources.resource.entry[0].resource
                    && action.payload.fhirResources.resource.entry[0].resource.valueQuantity
                    && action.payload.fhirResources.resource.entry[0].resource.valueQuantity.value
               ) 
               state[action.payload.fhirResources.type] = action.payload.fhirResources.resource.entry[0].resource.valueQuantity.value
            }
            return state
         default:
            return state
    }
}

export default patientFeatures

