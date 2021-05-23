import { combineReducers } from 'redux'

import patientFeatures from './patientreducers'
import uiReducers from './uireducers'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    patientFeatures,
    uiReducers
})

export default rootReducer