import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class AddUser extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>Sooon</h1>
                <form >
                    <input placeholder="Enter name" type="text"  /> 

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
