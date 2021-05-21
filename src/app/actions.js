import axios from 'axios'

//synchronous action creator
const fetchFHIRSuccess = fhirResources => ({
    type: 'FETCH_FHIR_SUCCESS',
    payload: { fhirResources }
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchFHIRResources =  () => {
    return async dispatch => {
        try {
            let response = await axios.get(
                'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB',
                {
                    headers: {
                      'Accept': 'application/json'
                    }
                  })
                  console.log(response.data)
            dispatch(fetchFHIRSuccess(response.data)) //store the resources
        }
        catch(e){
            console.log(e)
        }
    }
}