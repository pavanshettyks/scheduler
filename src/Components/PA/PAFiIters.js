import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './PAFilters.css'

export class PAFilters extends Component {
 
    changeText = (e) =>{
      //  console.log(new Date())
        //console.log(e.target.value)
        this.props.onChangeFilter(e.target.name,e.target.value)
    }

    render() {
        return (
           <React.Fragment>
                <form className= "formFilter">  
                    <div className= "formFilter_1">
                        <div className= "formFilter_2">
                            Event Name: <input type="text" name="Filter_Event_Name" value ={this.props.Filter_Event_Name}
                            onChange ={ this.changeText }/>
                        </div>
                        <div className= "formFilter_2">
                            UID:       <input type="text" name="Filter_UID"  value ={this.props.Filter_UID} 
                            onChange ={ this.changeText }/>
                        </div>
                        <div className= "formFilter_2">
                            VIC Staff:  <input type="text" name="Filter_Staff"  value ={this.props.Filter_Staff} 
                            onChange ={ this.changeText }/>
                        </div>
                        <div className= "formFilter_2">
                            Location:   <input type="text" name="Filter_Location"  value ={this.props.Filter_Location} 
                            onChange ={ this.changeText }/>
                        </div>
                        <div className= "formFilter_2">
                            Start Date:   <input type="date" name="Filter_Date"  value ={this.props.Filter_Date} 
                            onChange ={ this.changeText }/>
                        </div>
                        
                    </div>
                   
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>  {
   let date = new Date();
   let today = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+date.getDate();
   //console.log(new Date().getDate())
    return{
    Filter_Event_Name:state.UI.Filter_Event_Name,
    Filter_UID:state.UI.Filter_UID,
    Filter_Location:state.UI.Filter_Location,
    Filter_Staff:state.UI.Filter_Staff,
    Filter_Date: state.UI.Filter_Date?state.UI.Filter_Date: today,
   }
}

const mapDispatchToProps = dispatcher => {
    return {
         onChangeFilter: (target,value) => dispatcher({type:'FilterValue',target:target, value:value})
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(PAFilters)
