import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class ReactTableComponent extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    // }
    // shouldComponentUpdate(newprops){
    //     // console.log("new pros : ",newprops);
    //     // console.log("old props ",this.props);
    //     // Object.keys(newprops).forEach(data=>{
    //     //     if(newprops[data]===this.props[data]){
    //     //         console.log(data+"  is equal");
    //     //     }
    //     //     else{
    //     //         console.log(data+"  not equlat");
    //     //     }
    //     // })
    //     // if(newprops["tableData"] === this.props["tableData"]){
    //     //     return false;
    //     // }
    //     // else{
    //     //     return true;
    //     // }

    //     //     console.log("I am not equal");
    //     // }
    //     return true;
    // }
    render() {
        console.log("React Table is render" + new Date());
        // console.log("Rendering React Table : "+this.props.size);
        return (
            <div style={{ float: "left" }}>
                <ReactTable
                    data={this.props.tableData}
                    columns={this.props.columns}
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    pageSize={this.props.size}
                    loading={false}
                    showPagination={false}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    LoadingComponent={() => <h3 style={{ position: "absolute", top: "0px" }}>Loading....</h3>}
                // defaultPageSize={3}
                // pageSizeOptions={[3, 6]}
                />
            </div>
        )
    }
}

export default ReactTableComponent;