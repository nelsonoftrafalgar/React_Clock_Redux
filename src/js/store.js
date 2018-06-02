import {createStore} from 'redux';
import timeReducer from './reducers/timeReducer';

const store = createStore(timeReducer);
export default store
