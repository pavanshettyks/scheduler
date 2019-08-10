import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './AddNewPASchedule.css'

export class AddNewPASchedule extends Component {

    state ={
        
        Event_Name:'',
        UID:'',
        Event_Date:'',
        Location:'',
        Time:'',
        Num_Attendants:'',
        Staff:'',
        Permit_Type:'',
        PRO_Permits_located:'',
    }
    changeText = (e) =>{
        this.setState({[e.target.name]:e.target.value})
     }
     clearText =()=>{
         this.setState({Event_Name:'',
         UID:'',
         Event_Date:'',
         Location:'',
         Time:'',
         Num_Attendants:'',
         Staff:'',
         Permit_Type:'',
         PRO_Permits_located:'',})
     }
    
     onSubmit =(e) =>{
       // console.log("a")
        e.preventDefault();
        let PA_DATA = {
                Event_Name: this.state.Event_Name,
                UID:this.state.UID,
                Event_Date:this.state.Event_Date,
                Location:this.state.Location,
                Time: this.state.Time,
                Num_Attendants:this.state.Num_Attendants,
                Staff:this.state.Staff,
                Permit_Type:this.state.Permit_Type,
                PRO_Permits_located:this.state.PRO_Permits_located
        }
        this.props.NewPASchedule(PA_DATA);
        this.props.history.push('/scheduler/PAScreen');


    }

    render() {
        return (
            <div className= "formAdd">
                <form onSubmit ={ this.onSubmit }>
                      <div className= "formAdd">
                            <label>Event Name:</label>
                            <input required type="text" name="Event_Name" value ={this.state.Event_Name}
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                        <div className= "formAdd">
                            <label>UID:</label>
                            <input required type="text" name="UID"  value ={this.state.UID} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                        <div className= "formAdd">
                            <label>Event Date:</label>
                            <input required type="date" name="Event_Date"  value ={this.state.Event_Date} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                        <div className= "formAdd">
                            <label>Location:</label>
                            <input required type="text" name="Location"  value ={this.state.Location} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                        <div className= "formAdd">
                            <label>Time:</label>
                            <input type="text" name="Time"  value ={this.state.Time} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                        
                        <div className= "formAdd">
                             <label>No. of Attendants:</label>
                             <input type="text" name="Num_Attendants"  value ={this.state.Num_Attendants} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>

                        <div className= "formAdd">
                            <label>VIC Staff:</label>
                            <input type="text" name="Staff"  value ={this.state.Staff} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                       
                        <div className= "formAdd">
                            <label>Permit Type:</label>
                            <input required type="text" name="Permit_Type"  value ={this.state.Permit_Type} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>

                        <div className= "formAdd">
                             <label>PRO Permits located:</label>
                             <input type="text" name="PRO_Permits_located"  value ={this.state.PRO_Permits_located} 
                            onChange ={ this.changeText } className= "formAdd"/>
                        </div>
                        <div className= "formAdd">
                           <input type="button" value ="Clear" 
                                  onClick ={ this.clearText } className= "formAdd"/>
                            <input type="Submit" value ="Submit" className= "formAdd"
                            />
                            
                        </div>
                
                
                      				
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>  {
    return{

   }
}

const mapDispatchToProps = dispatcher => {
    return {
        NewPASchedule: (data) =>dispatcher({ type:'NewPASchedule',new_row: data})
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPASchedule)
