import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style ={headerStyle}>
            <h1>Scheduler is on the way...........</h1>
            <Link to="/" style={LinkStyle}>Scheduler</Link> | <Link to="/scheduler/AddUser" style={LinkStyle}>Add User</Link> 
            | <Link to="/scheduler/PAScreen" style={LinkStyle}>PA Schedule</Link> 
        </header>
    )
}
const headerStyle = {

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px'
  }

  const LinkStyle ={
    color: '#fff',
    textDecoration: 'none',
    
    }