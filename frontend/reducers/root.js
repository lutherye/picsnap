import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities/entities_reducer';
// import errorsReducer from './errors/errors_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
});