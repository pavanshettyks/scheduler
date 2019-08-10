import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class AddUser extends Component {
   state ={
       user:''
   }
    onSubmit =(e) =>{
        e.preventDefault();
        this.props.AddUser(this.state.user);
    }
    onChange =(e)=>{
        this.setState({user:e.target.value})
    }
    render() {
    
        return (
            <div>

                <form onSubmit = {this.onSubmit}>
                    <input placeholder="Enter new User" type="text"  value = {this.state.user}
                    name="add_user_name"  onChange = {this.onChange}/> 
                    <input type="submit" value= "Add User" />
                </form>
                <table>
                    <tbody>
                        <tr><th>Users</th></tr>
                        {this.props.users.map((user) => {
                            return <tr><td>{user}</td></tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
    users: state.local.userList,
    
}
}

const mapDispatchToProps = dispatcher => {
    return {
        AddUser: (user) => dispatcher({type:'Add_User',user:user}),
        onChangeUser: (target,value) => dispatcher({type:'FilterValue',target:target, value:value})
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
