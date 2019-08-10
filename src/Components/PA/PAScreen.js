import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom';
import PAFilters from './PAFiIters'
import PATable from './PATable'


export class PAScreen extends Component {

    newlocation =() =>{
        this.props.history.push('/scheduler/AddNewEvent');
       // window.location ='/scheduler/AddUser'
    }

    render() {
        return (
            <div>
               <div style={{marginTop:'15px',display:'flex',alignItems: 'left'  }}>
                     <button onClick = {this.newlocation} >Add New PA Schedule</button>
               </div>
                <PAFilters />
               
                <PATable />
            </div>
        )
    }
}



export default PAScreen;
