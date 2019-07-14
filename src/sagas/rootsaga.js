import {all,takeLatest,put} from 'redux-saga/effects';

function* requestApiData(action,state){
    const data = yield fetch("http://localhost:3800/reacttable").then(data=>{
        return data.json();
    }).catch(err=>{
        return {error:err}
    })

    if(data.hasOwnProperty('error')){
        yield put({type:'GET_DATA_ERROR',payload:data['error']});
        return;
    }
    else{
        yield put({type:'GET_DATA_SUCCESS',payload:data})
    }

}

export function* requestApiWatcher(){
    yield takeLatest('GET_DATA',requestApiData);
}


export default function* RootSaga(){
    yield all([
        requestApiWatcher()
    ])
}

