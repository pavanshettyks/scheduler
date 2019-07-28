import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentTimeBlock from './StudentTimeBlock';

export class Student extends Component {
 
    render() {
        return (
            <div style ={{display:'flex',}}>
                                      
            <div  className ="StudentName"  >
                  {this.props.user}
            </div>
            {
              Object.keys(this.props.studentDay).map( (key) => {
                return <StudentTimeBlock id = {this.props.studentDay[key]} time ={key} 
                studentName = {this.props.user} day= {this.props.day} key={key} />
              })
            }
            <div  className ="StudentName"  >
                  {this.props.CountPerDay}hrs
            </div>
          
    </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
  const user = ownProps.user;
  const day = ownProps.day;
//  console.log(user);
 //console.log(state.local[user][day])
 return  {
  user: ownProps.user,
  Day: ownProps.day,
  studentDay: state.local[user][day]['hrs'],
  CountPerDay: state.local[user][day]['CountPerDay']
}}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)
