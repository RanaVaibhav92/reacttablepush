const initialState = {
    fetching:false,
    fetchedData:[],
   
    dataLength:[],
    showData:[],
    error:null,
}
export default function RootReducer(state=initialState,action){
    switch(action.type){
        case 'GET_DATA':return ({...state,fetching:true,error:null,fetchedData:[]})
        case 'GET_DATA_SUCCESS':
        
        return ({...state,dataLength:action.payload.length,fetching:false,showData:[...action.payload],fetchedData:[...action.payload]})
        case 'GET_DATA_ERROR' : return ({...state,fetching:false,fetchedData:[],error:action.payload})
        case 'GET_FILTER_DATA' : 
        
        if(action.payload){
            let filterDataNew = state.fetchedData.filter(data=>{return (data["status"]==='Active')});
           
            return ({...state,fetching:false,dataLength:filterDataNew.length,showData:filterDataNew }) 
    
        }
        else{
            return ({...state,fetching:false,dataLength:state.fetchedData.length,showData:state.fetchedData }) 
        }
             default : return ({...state})  
    }
}