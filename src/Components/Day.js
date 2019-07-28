import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeBlock from './TimeBlock'
import Student from './Student';
const data =[

   "06:00 PM" ,   //"06.45",
   "07:00 PM", //,"07.15","07.30","07.45",
   "08:00 PM",//"08.15","08.30","08.45",
   "09:00 PM",// "09:15 PM",//"09.30","09.45",
   "10:00 PM",//"10.15","10.30","10.45",
   "11:00 PM",//"11.15","11.30","11.45",
   "12:00 PM",//"12.15","12.30","12.45",
   "1:00 PM",//"13.15","13.30","13.45",
   "2:00 PM",//"14.15","14.30","14.45",
   "3:00 PM",//"15.15","15.30","15.45",
   "4:00 PM",//"16.15","16.30","16.45",
   "5:00 PM",//"17.15","17.30","17.45",
   "6:00 PM",//"18.15","18.30","18.45", //"19.00"
   "7:00 PM"
]  
export class Day extends Component {
    
      
    render() {
      
        return (
            <div style ={{marginLeft:15, flexWrap:'wrap'}} >
            
              <h2>{this.props.day}</h2>
              
                <div style ={{display:'flex' }}>
                
                        <div  className ="StudentName" >
                              Student Name
                        </div>
                        {
                          
                          data.map( (time) => {
                            //console.log(time);
                            return <TimeBlock id = {time} key={time} />
                          })
                        }
                        <div  className ="StudentName" >
                              Total Time/Day
                        </div>
                       
                </div>
                {
                      this.props.users.map((user)=>  { 
                        return <Student user={user} key ={user} day = {this.props.day}/>
                        })
                }
                {/*  
                         {
                           Object.keys(this.props.data).map((key) => {
                            //console.log('',key,'',this.props.data[key],)
                            return <StudentTimeBlock id= {key} />
                           })
                          
                         }
                 */}        
                
                
                
                
                     
            </div>
        )
    }
}
const mapStatetoProps = (state,ownProps) => {

  return{
   users: state.local.userList,
   day: ownProps.day

  }
}

export default connect(mapStatetoProps,null)(Day);
