import React from 'react';

import './App.css';
import ManagementView from './component';
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    }
  }
  componentDidMount() {
    // fetch("http://localhost:3800/reacttable").then(data => {
    //   return data.json()
    // }).then(data => {
    //   this.setState({
    //     tableData: data,
        
    //   })
    // }).catch(er => {
    //   console.log(er);
    // })
  }
  render() {
    // console.log("Main Render Function");
    return (
      <ManagementView size={this.state.tableData.length} tableData={[]} />
    )
  }
}

export default App;
