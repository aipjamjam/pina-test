import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

const midleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger();

const store = createStore(persistedReducer, applyMiddleware(logger, midleware));
const persistor = persistStore(store);

export {store, persistor};
