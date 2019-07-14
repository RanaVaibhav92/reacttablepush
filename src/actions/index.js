export function requestData(){
    return ({type:'GET_DATA'})
}

export function filterData(dataFilter){
    console.log("Boolean check with data : ",dataFilter);
    return ({type:'GET_FILTER_DATA',payload:dataFilter})
}