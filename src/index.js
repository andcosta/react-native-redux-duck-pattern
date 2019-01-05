import '../config/ReactotronConfig';
import '../config/DevtoolsConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const app = () => (
    <Provider store={store}>
        <StatusBar hidden/>
        <App />
    </Provider>
);

export default app;