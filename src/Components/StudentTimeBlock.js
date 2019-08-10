//import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'



import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class StudentTimeBlock extends Component {

    changeAssignment = (id) =>{
        let isAssigned = this.props.data[id].isAssigned;
        let newCountPerDay = this.props.CountPerDay
        let newLocation = this.props.newLocation 
        console.log(newLocation)
        if( isAssigned && this.props.newLocation !== 'No'){
            isAssigned = true;
        }
        else if (isAssigned && this.props.newLocation === 'No') {
            isAssigned = false;
            newCountPerDay -= 0.25
        }
        else if (!isAssigned && this.props.newLocation !== 'No') {
            isAssigned = true;
            newCountPerDay += 0.25
        }
        const data ={
         time:this.props.time,
         interval : id,
         day: this.props.day,
         user:this.props.studentName,
         location: this.props.newLocation,
         assigned: isAssigned,
         CountPerDay:newCountPerDay
        }

        this.props.changeAssignment(data)
        //console.log(this.props.id[15],this.props.time,this.props.studentName,id)
    }
    getColor = (interval) => {
        const location =  this.props.data[interval].location;
        //console.log(location);
        switch (location){
            case 'No':
               return 'white';
            case 'Office':
               return 'blue';
            case 'Associated':
                return 'purple'
            case 'Arts':
                return 'orange'
            case 'Eastside':
                return 'yellow'
            case 'Busy':
                return 'red'
            default: return 'white'
        }
        
    }
    render() {
           //console.log(props)
                    return (
                        
                        <div className = "block" >

                            <div className= "subBlock" style ={{display:'flex', }}>
                                    <div className ="indBlock" style = {{backgroundColor: this.getColor('0')}} onClick ={ () => { this.changeAssignment('0')}} >:00 </div>
                                    <div className ="indBlock" style = {{backgroundColor: this.getColor('15')}} onClick ={() => { this.changeAssignment('15')}}>:15 </div>
                                    <div className ="indBlock" style = {{backgroundColor: this.getColor('30')}} onClick ={() => { this.changeAssignment('30')}}>:30 </div>
                                    <div style = {{backgroundColor: this.getColor('45')}} onClick ={() => { this.changeAssignment('45')}} >:45 </div>
                            </div>
                            
                        </div>
                        
                            //       <div className ="StdindBlock" onClick ={
                            //() => {console.log(props.id+" 00")}}> 0</div>
                                    
                                            
                    )
            }
        
}
const mapStateToProps = (state,props) => {
    const  user= props.studentName;
    const day = props.day;
    const time = props.time;
    //console.log(state.selectionView.selectedView);
  // console.log(state.local[user][day]['hrs'][time]['0'])
   return  {
    user: user,//this.ownProps.user,
    day: props.day,//this.ownProps.day,
    data: state.local[user][day]['hrs'][time],

    newLocation: state.selectionView.selectedView,
    CountPerDay: state.local[user][day]['CountPerDay']
    
  }}
  

  const mapDispatchToProps = dispatcher =>{
      return{
            changeAssignment: (studentSch) => dispatcher({type: 'changeAssignment', data:studentSch}),
      }
      
  }

export default connect(mapStateToProps, mapDispatchToProps)(StudentTimeBlock);
