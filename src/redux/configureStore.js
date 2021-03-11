import {applyMiddleware, combineReducers,createStore,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import countReducer from './ducks/counter';
import userReducer from './ducks/user';
import { watcherSaga } from './sagas/rootSaga';

export const rootReducer = combineReducers({
    counter: countReducer,
    user: userReducer
})
const sagaMiddleware = createSagaMiddleware();

const middleware =[sagaMiddleware];

const store = createStore(    
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware))
)
sagaMiddleware.run(watcherSaga);

export default store;