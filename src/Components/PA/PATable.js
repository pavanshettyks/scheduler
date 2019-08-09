import React, { Component } from 'react'

import { connect } from 'react-redux'

import TableRow from './TableRow'
import './PATable.css'

export class PATable extends Component {
 

    render() {

        return (
            <React.Fragment>
                    <table>
                        <tbody>
                                <tr>
                                    <th>Event Name</th>
                                    <th>UID</th>
                                    <th>Event Date</th>
                                    <th>Location</th>
                                    <th>Time</th>
                                    <th>No. of Attendants</th>
                                    <th>VIC Staff</th>
                                    <th>Permit Type</th>
                                    <th>PRO Permits located</th>
                                </tr>
                        </tbody>
                       
                       {

                        
                            this.props.AllRowData.map((row) => {
                              
                                if(row.UID.includes(this.props.Filter_UID) && row.Event_Name.toUpperCase().includes(this.props.Filter_Event_Name.toUpperCase()) &&
                                 row.Staff.toUpperCase().includes(this.props.Filter_Staff.toUpperCase()) && 
                                 row.Location.toUpperCase().includes(this.props.Filter_Location.toUpperCase()))
                                    return <TableRow rowData ={row} key ={row.UID} />
                            })
                        }

                       
                    </table> 
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
   // console.log(new Date())
    return{
    AllRowData: state.PA,
    Filter_Event_Name:state.UI.Filter_Event_Name,
    Filter_UID:state.UI.Filter_UID,
    Filter_Location:state.UI.Filter_Location,
    Filter_Staff:state.UI.Filter_Staff,
   }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PATable)
