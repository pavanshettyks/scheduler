import React from 'react'
//import PropTypes from 'prop-types'

const TimeBlock = props => {
    return (
        <div className = "Tblock" >
            <div>
                 {props.id}
            </div>
            <div className= "subBlock" style ={{display:'flex', }}>
                    <div className ="indBlock" onClick ={() => {console.log(props.id+"00")}}>:00 </div>
                    <div className ="indBlock" onClick ={() => {console.log(props.id+" 15")}}>:15 </div>
                    <div className ="indBlock" onClick ={() => {console.log(props.id+" 30")}}>:30 </div>
                    <div onClick ={() => {console.log(props.id+" 45")}}>:45 </div>
            </div>
            
        </div>
    )
}


export default TimeBlock
