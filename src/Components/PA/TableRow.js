import React, { Component } from 'react'

import { connect } from 'react-redux'

export class TableRow extends Component {


    render() {
        
        return (     
            <tbody>
                <tr>
                            <td>{this.props.row.Event_Name}</td>
                            <td>{this.props.row.UID}</td>
                            <td>{this.props.Event_Date}</td>
                            <td>{this.props.row.Location}</td>
                            <td>{this.props.row.Time}</td>
                            <td>{this.props.row.Num_Attendants}</td>
                            <td>{this.props.row.Staff}</td>
                            <td>{this.props.row.Permit_Type}</td>
                            <td>{this.props.row.PRO_Permits_located}</td>
                </tr>
            </tbody>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    let date = new Date(ownProps.rowData.Event_Date);
    let event_date = (date.getMonth()+ 1 )+'/'+date.getDate()+'/'+date.getFullYear();
    return {
        row: ownProps.rowData,
        Event_Date: event_date
        
    }
   // rowData: state.PA
   
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)
