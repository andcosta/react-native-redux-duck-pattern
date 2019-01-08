import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import reducers from './rudux-ducks';
import sagas from './sagas'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];

const persistConfig = {
	key: 'root',
	storage: storage,
    whitelist: ['user'],
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store)
sagaMiddleware.run(sagas);

export { store, persistor };