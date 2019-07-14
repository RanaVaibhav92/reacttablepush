import React from 'react';
import {connect} from 'react-redux';
import ListViewComponent from './view';
import { setTimeout } from 'timers';
import {requestData,filterData} from '../actions/index';
class ManagementComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            tableNewdata: [],
            filtereData: [],
        }

    }
    componentDidMount(){
        this.props.getData();
    }
    // static getDerivedStateFromProps(props, state) {
    //     if (state.isActive) {
    //         return {
    //             ...state
    //         }
    //     }
    //     else {
    //         return {
    //             ...state, tableNewdata: props.tableData
    //         }
    //     }

    // }
    handleChange = (event) => {
        console.log("value of the data is : " + event.target.value);
    }
    clickHandler = (event) => {
        console.log("I am clicked");
        // 
        
        this.setState((state) => ({
            isActive: !this.state.isActive,
        }),()=>{
          
           this.props.filterData(this.state.isActive); 
        })
       
    }
    // filerdata() {
    //     setTimeout(() => {
    //         this.setState((state) => ({
    //             tableNewdata: state.tableNewdata.filter(x => { return (x["status"] === 'Active') })

    //         }))
    //     }, 5000);



    // }
    render() {
        console.log("I am the ManagementComponent render function");
        // console.log("length is : "+this.props.tableData["dataLength"]);
        return (
            <div>
                {/* <div>ManagementComponent Component</div> */}
               
                <ListViewComponent
                    handleChange={this.handleChange}
                    clickHandler={this.clickHandler}
                    tableData={this.props.tableData["showData"]}
                    defaultPageSize={this.props.tableData["dataLength"] || 0}
                    size={this.props.tableData["dataLength"] || 0}
                    isActive={this.state.isActive}
                />

              

            </div>

        )
    }
}
const mapstoretoprops = (state)=>({
    tableData : state,

})
const mapdispatchToProps = (dispatch)=>({
    getData : () =>(dispatch(requestData())),
    filterData : (checkBool)=>(dispatch(filterData(checkBool)))
})

export default connect(mapstoretoprops,mapdispatchToProps)(ManagementComponent);