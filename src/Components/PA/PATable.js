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
                                 row.Location.toUpperCase().includes(this.props.Filter_Location.toUpperCase())&& ( new Date(this.props.Filter_Date) < new Date(row.Event_Date)))
                                    return <TableRow rowData ={row} key ={row.UID} />
                                return null
                            })
                        }

                       
                    </table> 
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    
    let date = new Date();
    let today = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+date.getDate();
   // console.log(state.UI.Filter_Date)
    //console.log(state.PA)

    function compareValues(key, order='asc') {
        return function(a, b) {
          if(!a.hasOwnProperty(key) || 
             !b.hasOwnProperty(key)) {
              return 0; 
          }
          
          const varA = (typeof a[key] === 'string') ? 
            a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string') ? 
            b[key].toUpperCase() : b[key];
            
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? 
            (comparison * -1) : comparison
          );
        };
      }
    let copy_PA = state.PA //.sort(compareValues('Event_Date'))
    return{
    AllRowData: copy_PA.sort(compareValues('Event_Date')),
    Filter_Event_Name:state.UI.Filter_Event_Name,
    Filter_UID:state.UI.Filter_UID,
    Filter_Location:state.UI.Filter_Location,
    Filter_Staff:state.UI.Filter_Staff,
    Filter_Date:state.UI.Filter_Date?state.UI.Filter_Date: today,
   }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PATable)
