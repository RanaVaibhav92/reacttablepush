import React  from 'react';
import ConfigurationComponent from './ConfigurationView';
const columns = [{
    Header: 'ID',
    accessor: 'id'
},{
    Header: 'NAME',
    accessor: 'name'
},{
    Header: 'STATUS',
    accessor: 'status'
}, {
    Header: 'ADDRESS',
    accessor: 'address'
}]
class ListViewComponent extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <ConfigurationComponent
                handleChange={this.props.handleChange}
                clickHandler={this.props.clickHandler}
                tableData={this.props.tableData}
                isActive={this.props.isActive}
                columns={columns}
                size={this.props.size}
            />
        )
    }
}

export default ListViewComponent;