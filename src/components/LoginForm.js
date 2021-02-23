import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from './../redux/actions/loginActions'

class LoginForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      email: this.props.login.user.email,
      password: this.props.login.user.password
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const user = this.state
    console.log(user)
    
    this.props.loginUser(user)
  }

  render() {
    return (
      <div>
        <h1>Login form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input 
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input 
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  product: state.product
})

const mapDispatchToProps = {
  loginUser
}

export default connect(mapStateToProps, mapDispatchToProps )(LoginForm)
