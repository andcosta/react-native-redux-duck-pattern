
import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UserActions } from "../../store/ducks/user";

export function* userRequest() {
    
    try {
        // teste: recuperar dados do estado
        const currentUser = yield select(state => state.user.data);
        console.tron.log({ currentUser });

        const response = yield call(api.get, '/api')

        const { name, picture } = response.data.results[0];
        yield put(UserActions.userRequestSuccess({
            userName: `${ name.first } ${ name.last }`,
            userAvatar: picture.large
        }));

    }catch(err) {
        const { status, data } = err.response;
        yield put(UserActions.userRequestFailure({ status, data }));
    }
}