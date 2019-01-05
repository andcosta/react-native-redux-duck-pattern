
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

if(__DEV__) {

    const tron = Reactotron
        .configure() // or .configure({ host: '_your_IP_' })
        .useReactNative() 
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect()

    console.tron = tron;
}
