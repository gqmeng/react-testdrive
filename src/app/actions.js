import axios from 'axios';
import { loadingDone } from './uiactions';

const fetchFHIRSuccess = fhirResources => ({
    type: 'FETCH_FHIR_SUCCESS',
    payload: { fhirResources }
})

export const fetchFHIRResources =  () => {
    return async dispatch => {
        let axiosOption = {
                headers: {'Accept': 'application/json' }
            }

        let response
        try {
            response = await axios.get(
                'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB',
                axiosOption 
            )
            dispatch(fetchFHIRSuccess({ 'type': 'patient', 'resource':response.data})) //store the resources
             response = await axios.get(
                'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=29463-7',
                axiosOption 
            )
            dispatch(fetchFHIRSuccess({ 'type': 'weight', 'resource':response.data})) //store the resources           
            response = await axios.get(
                'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=8302-2',
                axiosOption 
            )
            dispatch(fetchFHIRSuccess({ 'type': 'height', 'resource':response.data})) //store the resources    
            dispatch(loadingDone())
        }
        catch(e){
            console.log(e)
        }
      }
}

