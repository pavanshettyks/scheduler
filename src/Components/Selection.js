import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Selection extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className ="selectionBox" style={{disply:'flex', margin: 15}}>
                <div id="no"      className= "smallBox" onClick = {()=> {this.props.selectionView('No')} }> No </div>
                <div id="office"      className= "smallBox" onClick = {()=> {this.props.selectionView('Office')} }> Office </div>
                <div id="arts"        className= "smallBox" onClick = {()=> {this.props.selectionView('Arts')} }> Arts </div>
                <div id="eastside"    className= "smallBox" onClick = {()=> {this.props.selectionView('Eastside')} }> Easide </div>
                <div id="associated"  className= "smallBox" onClick = {()=> {this.props.selectionView('Associated')} }> Associated</div>

                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
 return {
  
 }   
}

const mapDispatchToProps = (dispatcher)=> {
    return {
        selectionView: (location) => dispatcher({ type: 'selectionView' , location: location})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection)
