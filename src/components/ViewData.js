import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Link } from 'react-router-dom'

class ViewData extends Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  
  render() {
    const { isLoggedIn, user } = this.props.login
    console.log(isLoggedIn)
    return (
      <div>
        <Link to="/">Login Page</Link>
        <h1>Email: {user.email}</h1>
        <h1>Password: {user.password}</h1>
        <h1>isLogin: {isLoggedIn ? "Logged In" : "Logged Out"}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.login
})


export default connect(mapStateToProps, {  })(ViewData)
